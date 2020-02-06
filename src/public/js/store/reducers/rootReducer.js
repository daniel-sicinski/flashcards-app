import { combineReducers } from "redux";
import audioReducer from "./audioReducer";
import cardsReducer from "./cardsReducer";
import playlistsReducer from "./playlistsReducer";
import UIReducer from "./UIReducer";
import authReducer from "./authReducer";

export default combineReducers({
  audio: audioReducer,
  cards: cardsReducer,
  playlists: playlistsReducer,
  auth: authReducer,
  ui: UIReducer
});
