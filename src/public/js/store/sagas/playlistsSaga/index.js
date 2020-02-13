import localforage from "localforage";
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
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
} from "../requests";
import { mapArrayToObjectByIds } from "../utils";
import IndexedDBService from "../IndexedDBService";

const selectPlaylistsData = state => state.playlists.playlistsData;
const selectUserData = state => state.auth.user;

const dbService = new IndexedDBService(localforage);

export function* getPlaylists() {
  const user = yield select(selectUserData);
  console.log("from playlistSaga: ");
  const userPlaylists = yield call(
    dbService.getData,
    `playlists-${user.userId}`
  );

  const playlistsObject = mapArrayToObjectByIds(userPlaylists || [], "_id");

  yield put(fetchPlaylistsSuccess(playlistsObject));

  try {
    const response = yield call(getRequest, "/playlists");
    const { playlists } = response.data;

    yield call(dbService.saveData, `playlists-${user.userId}`, playlists);

    const playlistsObject = mapArrayToObjectByIds(playlists, "_id");

    yield put(fetchPlaylistsSuccess(playlistsObject));
  } catch (error) {
    if (!userPlaylists) {
      yield put(fetchPlaylistsError(error.message));
    }
  }
}

export function* getPlaylist(action) {
  const { playlistId } = action.payload;

  const playlistsData = yield select(selectPlaylistsData);
  const user = yield select(selectUserData);

  let requestedPlaylist = playlistsData[playlistId];

  if (requestedPlaylist) {
    yield put(fetchPlaylistSuccess(requestedPlaylist));
  } else {
    const userPlaylists = yield call(
      dbService.getData,
      `playlists-${user.userId}`
    );
    requestedPlaylist = userPlaylists.find(
      playlist => playlist._id === playlistId
    );

    if (requestedPlaylist) {
      yield put(fetchPlaylistSuccess(requestedPlaylist));
    }

    try {
      const response = yield call(getRequest, `/playlists/${playlistId}`);
      const { playlist } = response.data;

      yield put(fetchPlaylistSuccess(playlist));
    } catch (error) {
      if (!requestedPlaylist) {
        yield put(fetchPlaylistError(error.message));
      }
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
  const history = yield getContext("routerHistory");

  try {
    const response = yield call(
      putRequest,
      `/playlists/${playlistId}`,
      updatedPlaylistData
    );
    const { updatedPlaylist } = response.data;

    yield put(updatePlaylistSuccess(updatedPlaylist));
    history.replace(`/playlists/${playlistId}`);
  } catch (error) {
    yield put(updatePlaylistError(error.message));
  }
}

export function* deletePlaylist(action) {
  const { playlistId } = action.payload;
  const history = yield getContext("routerHistory");

  try {
    yield call(deleteRequest, `/playlists/${playlistId}`);

    yield put(deletePlaylistSuccess(playlistId));
    history.replace("/playlists");
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
