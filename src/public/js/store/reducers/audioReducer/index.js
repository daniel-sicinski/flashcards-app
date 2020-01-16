import {
  SET_TRACKS_TO_PLAY,
  FETCH_TRACK_START,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_ERROR,
  PLAY_TRACK,
  PAUSE_TRACK,
  TRACK_FINISHED,
  STOP_AUDIO
} from "../../actions/audioActions/actionNames";

const initialState = {
  trackRefs: {},
  loading: false,
  error: null,
  tracksToPlay: [],
  paused: false,
  currentlyPlayedTrackRef: null,
  playbackGap: 1500
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKS_TO_PLAY:
      return {
        ...state,
        tracksToPlay: action.payload.tracksToPlay,
        loading: false,
        error: null,
        paused: false,
        currentlyPlayedTrackRef: null
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
        error: action.payload.error
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
    case TRACK_FINISHED:
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
        currentlyPlayedTrackRef: null
      };
    default:
      return state;
  }
};
