import Immutable from "immutable";
import { OPEN_MENU, CLOSE_MENU } from "../../constants/ui/menu";

const initialState = Immutable.fromJS({
  isMenuOpen: false
});

// slice reducers
export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MENU:
      return state.set("isMenuOpen", true);
    case CLOSE_MENU:
      return state.set("isMenuOpen", false);
    default:
      return state;
  }
}
