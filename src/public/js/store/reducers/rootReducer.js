import { combineReducers } from "redux";
import audioReducer from "./audioReducer";
import cardsReducer from "./cardsReducer";
import playlistsReducer from "./playlistsReducer";
import UIReducer from "./UIReducer";

export default combineReducers({
  audio: audioReducer,
  cards: cardsReducer,
  playlists: playlistsReducer,
  ui: UIReducer
});
