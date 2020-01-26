import {
  FETCH_PLAYLISTS_START,
  FETCH_PLAYLISTS_ERROR,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLIST_START,
  FETCH_PLAYLIST_SUCCESS,
  FETCH_PLAYLIST_ERROR,
  ADD_PLAYLIST_START,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_ERROR,
  DELETE_PLAYLIST_START,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_ERROR,
  UPDATE_PLAYLIST_START,
  UPDATE_PLAYLIST_SUCCESS,
  UPDATE_PLAYLIST_ERROR,
  ACTIVATE_SELECT_PLAYLIST_EDIT_STATE,
  ACTIVATE_SELECT_PLAYLIST_DELETE_STATE,
  DISABLE_SELECT_PLAYLIST_STATE,
  SET_EDIT_PLAYLIST_STATE,
  DISABLE_EDIT_PLAYLIST_STATE
} from "./actionNames";

export const fetchPlaylists = () => {
  return {
    type: FETCH_PLAYLISTS_START
  };
};

export const fetchPlaylistsError = error => {
  return {
    type: FETCH_PLAYLISTS_ERROR,
    payload: {
      error
    }
  };
};

export const fetchPlaylistsSuccess = playlistsData => {
  return {
    type: FETCH_PLAYLISTS_SUCCESS,
    payload: {
      playlistsData
    }
  };
};

export const fetchPlaylist = playlistId => {
  return {
    type: FETCH_PLAYLIST_START,
    payload: {
      playlistId
    }
  };
};

export const fetchPlaylistError = error => {
  return {
    type: FETCH_PLAYLIST_ERROR,
    payload: {
      error
    }
  };
};

export const fetchPlaylistSuccess = playlist => {
  return {
    type: FETCH_PLAYLIST_SUCCESS,
    payload: {
      playlist
    }
  };
};

export const addPlaylist = playlistData => {
  return {
    type: ADD_PLAYLIST_START,
    payload: {
      playlistData
    }
  };
};

export const addPlaylistSuccess = playlist => {
  return {
    type: ADD_PLAYLIST_SUCCESS,
    payload: {
      playlist
    }
  };
};

export const addPlaylistError = error => {
  return {
    type: ADD_PLAYLIST_ERROR,
    payload: {
      error
    }
  };
};

export const deletePlaylist = playlistId => {
  return {
    type: DELETE_PLAYLIST_START,
    payload: {
      playlistId
    }
  };
};

export const deletePlaylistSuccess = playlistId => {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
    payload: {
      playlistId
    }
  };
};

export const deletePlaylistError = error => {
  return {
    type: DELETE_PLAYLIST_ERROR,
    payload: {
      error
    }
  };
};

export const updatePlaylist = (playlistId, updatedPlaylistData) => {
  return {
    type: UPDATE_PLAYLIST_START,
    payload: {
      playlistId,
      updatedPlaylistData
    }
  };
};

export const updatePlaylistSuccess = playlist => {
  return {
    type: UPDATE_PLAYLIST_SUCCESS,
    payload: {
      playlist
    }
  };
};

export const updatePlaylistError = error => {
  return {
    type: UPDATE_PLAYLIST_ERROR,
    payload: {
      error
    }
  };
};

export const activateSelectPlaylistEditState = () => {
  return {
    type: ACTIVATE_SELECT_PLAYLIST_EDIT_STATE
  };
};

export const activateSelectPlaylistDeleteState = () => {
  return {
    type: ACTIVATE_SELECT_PLAYLIST_DELETE_STATE
  };
};

export const disableSelectPlaylistState = () => {
  return {
    type: DISABLE_SELECT_PLAYLIST_STATE
  };
};

export const setPlaylistForEdit = playlistId => {
  return {
    type: SET_EDIT_PLAYLIST_STATE,
    payload: {
      playlistId
    }
  };
};

export const disablePlaylistEditState = () => {
  return {
    type: DISABLE_EDIT_PLAYLIST_STATE
  };
};
