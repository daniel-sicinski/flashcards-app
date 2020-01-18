import { combineReducers } from "redux";
import audioReducer from "./audioReducer";
import cardsReducer from "./cardsReducer";

export default combineReducers({
  audio: audioReducer,
  cards: cardsReducer
});
