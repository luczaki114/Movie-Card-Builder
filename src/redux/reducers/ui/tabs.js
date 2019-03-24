import Immutable from "immutable";
import { SELECT_TAB } from "../../constants/ui/tabs";

const initialState = Immutable.fromJS({
  activeTab: 0
});

function selectTab(state, action) {
  const newState = state.set("activeTab", action.payload.value);
  return newState;
}

export function tabsReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_TAB:
      return selectTab(state, action);
    default:
      return state;
  }
}
