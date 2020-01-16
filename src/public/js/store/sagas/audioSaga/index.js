import {
  call,
  put,
  select,
  takeLatest,
  race,
  delay,
  take,
  takeEvery
} from "redux-saga/effects";
import {
  LOAD_TRACK,
  TRACK_FINISHED,
  STOP_AUDIO,
  SET_TRACKS_TO_PLAY,
  RESUME_TRACK,
  PAUSE_TRACK
} from "../../actions/audioActions/actionNames";
import {
  fetchTrackStart,
  fetchTrackSuccess,
  fetchTrackError,
  playTrack,
  gapFinished
} from "../../actions/audioActions";
import { audioRequest } from "../utils";

const selectTrackRefs = state => state.audio.trackRefs;
const selectPlaybackGap = state => state.audio.playbackGap;
const selectIsLastTrack = state => state.audio.tracksToPlay.length === 1;

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

export function* watchTrackGapFinish() {
  const { paused } = yield race({
    gapFinished: call(setGapFinishTimer),
    paused: take(PAUSE_TRACK),
    stopped: take([STOP_AUDIO, SET_TRACKS_TO_PLAY])
  });

  if (paused) {
    const { resumed } = yield race({
      resumed: take(RESUME_TRACK),
      stopped: take([STOP_AUDIO, SET_TRACKS_TO_PLAY])
    });

    if (resumed) {
      yield put(gapFinished());
    }
  }
}

export function* setGapFinishTimer() {
  const playbackGapMs = yield select(selectPlaybackGap);
  const isLastTrack = yield select(selectIsLastTrack);

  if (!isLastTrack) {
    yield delay(playbackGapMs);
  }

  yield put(gapFinished());
}

export default function* watchAudioSaga() {
  yield takeLatest(LOAD_TRACK, getTrack);
  yield takeEvery(TRACK_FINISHED, watchTrackGapFinish);
}
