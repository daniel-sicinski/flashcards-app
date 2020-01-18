import {
  SET_TRACKS_TO_PLAY,
  FETCH_TRACK_START,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_ERROR,
  PLAY_TRACK,
  PAUSE_TRACK,
  TRACK_FINISHED,
  STOP_AUDIO,
  LOAD_TRACK,
  RESUME_TRACK,
  GAP_FINISHED
} from "../../actions/audioActions/actionNames";

const initialState = {
  trackRefs: {},
  loading: false,
  error: null,
  tracksToPlay: [],
  paused: false,
  currentlyPlayedTrackRef: null,
  playbackGap: 1500,
  currentlyActiveCardId: null,
  isGlobalAudioPlay: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS_TO_PLAY:
      return {
        ...state,
        tracksToPlay: action.payload.tracksToPlay,
        paused: false,
        currentlyPlayedTrackRef: null,
        currentlyActiveCardId: null,
        isGlobalAudioPlay: !!action.payload.isGlobalAudioPlay
      };
    case LOAD_TRACK:
      return {
        ...state,
        currentlyActiveCardId: state.tracksToPlay[0].slice(1)
      };
    case FETCH_TRACK_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_TRACK_SUCCESS:
      return {
        ...state,
        trackRefs: {
          ...state.trackRefs,
          [action.payload.trackId]: action.payload.trackRef
        },
        loading: false
      };
    case FETCH_TRACK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        currentlyActiveCardId: null,
        isGlobalAudioPlay: false
      };
    case PLAY_TRACK:
      return {
        ...state,
        currentlyPlayedTrackRef: action.payload.currentTrackRef,
        paused: false
      };
    case PAUSE_TRACK:
      return {
        ...state,
        paused: true
      };
    case RESUME_TRACK:
      return {
        ...state,
        paused: false
      };
    case TRACK_FINISHED:
      return {
        ...state,
        currentlyPlayedTrackRef: null
      };
    case GAP_FINISHED:
      return {
        ...state,
        tracksToPlay: state.tracksToPlay.slice(1)
      };
    case STOP_AUDIO:
      return {
        ...state,
        loading: false,
        error: null,
        paused: false,
        currentlyPlayedTrackRef: null,
        currentlyActiveCardId: null,
        isGlobalAudioPlay: false
      };
    default:
      return state;
  }
};
