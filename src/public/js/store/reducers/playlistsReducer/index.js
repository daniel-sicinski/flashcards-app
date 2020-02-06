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
  DISABLE_SELECT_PLAYLIST_STATE,
  ACTIVATE_SELECT_PLAYLIST_EDIT_STATE,
  ACTIVATE_SELECT_PLAYLIST_DELETE_STATE,
  SET_EDIT_PLAYLIST_STATE,
  DISABLE_EDIT_PLAYLIST_STATE
} from "../../actions/playlistsActions/actionNames";

const initialState = {
  playlistsData: {},
  selectPlaylistEditState: false,
  selectPlaylistDeleteState: false,
  editedPlaylistId: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_START:
    case FETCH_PLAYLIST_START:
    case ADD_PLAYLIST_START:
    case UPDATE_PLAYLIST_START:
    case DELETE_PLAYLIST_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlistsData: action.payload.playlistsData,
        loading: false
      };
    case ADD_PLAYLIST_SUCCESS:
    case FETCH_PLAYLIST_SUCCESS:
    case UPDATE_PLAYLIST_SUCCESS:
      const playlistId = action.payload.playlist._id;
      return {
        ...state,
        playlistsData: {
          ...state.playlistsData,
          [playlistId]: action.payload.playlist
        },
        loading: false
      };
    case DELETE_PLAYLIST_SUCCESS:
      const playlistsDataCopy = { ...state.playlistsData };
      delete playlistsDataCopy[action.payload.playlistId];

      return {
        ...state,
        playlistsData: playlistsDataCopy,
        loading: false
      };
    case UPDATE_PLAYLIST_ERROR:
    case DELETE_PLAYLIST_ERROR:
    case FETCH_PLAYLISTS_ERROR:
    case FETCH_PLAYLIST_ERROR:
    case ADD_PLAYLIST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case ACTIVATE_SELECT_PLAYLIST_EDIT_STATE:
      return {
        ...state,
        selectPlaylistEditState: true,
        selectPlaylistDeleteState: false
      };
    case ACTIVATE_SELECT_PLAYLIST_DELETE_STATE:
      return {
        ...state,
        selectPlaylistDeleteState: true,
        selectPlaylistEditState: false
      };
    case DISABLE_SELECT_PLAYLIST_STATE:
      return {
        ...state,
        selectPlaylistEditState: false,
        selectPlaylistDeleteState: false
      };
    case SET_EDIT_PLAYLIST_STATE:
      return {
        ...state,
        editedPlaylistId: action.payload.playlistId
      };
    case DISABLE_EDIT_PLAYLIST_STATE:
      return {
        ...state,
        editedPlaylistId: null
      };
    default:
      return state;
  }
};
