import { combineReducers } from "redux-immutable";
import byIdReducer from "./byId";
import allCardsReducer from "./allCards";

export const cardsReducer = combineReducers({
  byId: byIdReducer,
  allCards: allCardsReducer
});

export default cardsReducer;
