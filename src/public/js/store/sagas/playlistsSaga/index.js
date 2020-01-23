import { call, put, takeEvery, select, getContext } from "redux-saga/effects";
import {
  FETCH_PLAYLISTS_START,
  FETCH_PLAYLIST_START,
  ADD_PLAYLIST_START,
  UPDATE_PLAYLIST_START,
  DELETE_PLAYLIST_START
} from "../../actions/playlistsActions/actionNames";
import {
  fetchPlaylistsSuccess,
  fetchPlaylistsError,
  fetchPlaylistSuccess,
  fetchPlaylistError,
  addPlaylistSuccess,
  addPlaylistError,
  updatePlaylistSuccess,
  updatePlaylistError,
  deletePlaylistSuccess,
  deletePlaylistError
} from "../../actions/playlistsActions";
import { setDisplayedCards } from "../../actions/cardsActions";
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "../requests";
import { mapArrayToObjectByIds } from "../utils";

const selectPlaylistsData = state => state.playlists.playlistsData;

export function* getPlaylists() {
  try {
    const response = yield call(getRequest, "/playlists");
    const { playlists } = response.data;

    const playlistsObject = mapArrayToObjectByIds(playlists, "_id");

    yield put(fetchPlaylistsSuccess(playlistsObject));
  } catch (error) {
    yield put(fetchPlaylistsError(error.message));
  }
}

export function* getPlaylist(action) {
  const { playlistId } = action.payload;

  const playlistsData = yield select(selectPlaylistsData);
  const requestedPlaylist = playlistsData[playlistId];

  if (requestedPlaylist) {
    yield put(fetchPlaylistSuccess(requestedPlaylist));
    yield put(setDisplayedCards(requestedPlaylist.cardsIds));
  } else {
    try {
      const response = yield call(getRequest, `/playlists/${playlistId}`);
      const { playlist } = response.data;

      yield put(fetchPlaylistSuccess(playlist));
      yield put(setDisplayedCards(playlist.cardsIds));
    } catch (error) {
      yield put(fetchPlaylistError(error.message));
    }
  }
}

export function* addPlaylist(action) {
  const { playlistData } = action.payload;
  const history = yield getContext("routerHistory");

  try {
    const response = yield call(postRequest, `/playlists`, playlistData);
    const { newPlaylist } = response.data;
    const { _id } = newPlaylist;

    yield put(addPlaylistSuccess(newPlaylist));
    history.replace(`/playlists/${_id}`);
  } catch (error) {
    yield put(addPlaylistError(error.message));
  }
}

export function* updatePlaylist(action) {
  const { playlistId, updatedPlaylistData } = action.payload;

  try {
    const response = yield call(
      putRequest,
      `/playlists/${playlistId}`,
      updatedPlaylistData
    );
    const { updatedPlaylist } = response.data;

    yield put(updatePlaylistSuccess(updatedPlaylist));
  } catch (error) {
    yield put(updatePlaylistError(error.message));
  }
}

export function* deletePlaylist(action) {
  const { playlistId } = action.payload;

  try {
    yield call(deleteRequest, `/playlists/${playlistId}`);

    yield put(deletePlaylistSuccess(playlistId));
  } catch (error) {
    yield put(deletePlaylistError(error.message));
  }
}

export default function* watchPlaylistsSaga() {
  yield takeEvery(FETCH_PLAYLISTS_START, getPlaylists);
  yield takeEvery(FETCH_PLAYLIST_START, getPlaylist);
  yield takeEvery(ADD_PLAYLIST_START, addPlaylist);
  yield takeEvery(UPDATE_PLAYLIST_START, updatePlaylist);
  yield takeEvery(DELETE_PLAYLIST_START, deletePlaylist);
}
