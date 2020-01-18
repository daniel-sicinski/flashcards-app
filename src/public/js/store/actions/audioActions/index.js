import {
  SET_TRACKS_TO_PLAY,
  LOAD_TRACK,
  FETCH_TRACK_START,
  FETCH_TRACK_SUCCESS,
  FETCH_TRACK_ERROR,
  PLAY_TRACK,
  PAUSE_TRACK,
  TRACK_FINISHED,
  STOP_AUDIO,
  RESUME_TRACK,
  GAP_FINISHED
} from "./actionNames";

export const setTracksToPlay = (tracksToPlay, isGlobalAudioPlay) => {
  return {
    type: SET_TRACKS_TO_PLAY,
    payload: {
      tracksToPlay,
      isGlobalAudioPlay
    }
  };
};

export const loadTrack = trackId => {
  return {
    type: LOAD_TRACK,
    payload: {
      trackId
    }
  };
};

export const fetchTrackStart = () => {
  return {
    type: FETCH_TRACK_START
  };
};

export const fetchTrackSuccess = (trackId, trackRef) => {
  return {
    type: FETCH_TRACK_SUCCESS,
    payload: {
      trackId,
      trackRef
    }
  };
};

export const fetchTrackError = error => {
  return {
    type: FETCH_TRACK_ERROR,
    payload: {
      error
    }
  };
};

export const playTrack = currentTrackRef => {
  return {
    type: PLAY_TRACK,
    payload: {
      currentTrackRef
    }
  };
};

export const pauseTrack = () => {
  return {
    type: PAUSE_TRACK
  };
};

export const resumeTrack = () => {
  return {
    type: RESUME_TRACK
  };
};

export const trackFinished = () => {
  return {
    type: TRACK_FINISHED
  };
};

export const gapFinished = () => {
  return {
    type: GAP_FINISHED
  };
};

export const stopAudio = () => {
  return {
    type: STOP_AUDIO
  };
};
