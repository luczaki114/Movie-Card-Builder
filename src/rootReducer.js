import Immutable from "immutable";
import { combineReducers } from "redux-immutable";

import { CLEAR_CACHE } from "./redux/constants/app";
import { cardsReducer } from "./redux/reducers/cards";
import { UIReducer } from "./redux/reducers/ui";

const appReducer = combineReducers({
  cards: cardsReducer,
  UI: UIReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_CACHE) {
    state = Immutable.Map({});
  }

  return appReducer(state, action);
};

export default rootReducer;
