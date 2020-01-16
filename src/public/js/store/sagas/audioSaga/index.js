import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOAD_TRACK } from "../../actions/audioActions/actionNames";
import {
  fetchTrackStart,
  fetchTrackSuccess,
  fetchTrackError,
  playTrack
} from "../../actions/audioActions";
import { audioRequest } from "../utils";

const selectTrackRefs = state => state.audio.trackRefs;

export function* getTrack(action) {
  const { trackId } = action.payload;
  const trackRefs = yield select(selectTrackRefs);

  const requestedTrackRef = trackRefs[trackId];

  if (requestedTrackRef) {
    yield put(playTrack(requestedTrackRef));
  } else {
    try {
      yield put(fetchTrackStart());

      const audioBlob = yield call(audioRequest, trackId);

      const trackRef = window.URL.createObjectURL(audioBlob);

      yield put(fetchTrackSuccess(trackId, trackRef));
      yield put(playTrack(trackRef));
    } catch (e) {
      yield put(fetchTrackError(e.message));
    }
  }
}

export default function* watchAudioSaga() {
  yield takeLatest(LOAD_TRACK, getTrack);
}
