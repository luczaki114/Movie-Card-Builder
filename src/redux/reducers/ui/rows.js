import Immutable from "immutable";
import { CHANGE_ROW_UPDATE } from "../../constants/ui/rows";

const initialState = Immutable.fromJS({
  activeRow: 1
});

// slice reducers
export function rowsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ROW_UPDATE:
      return state.set("activeRow", action.payload.value);
    default:
      return state;
  }
}
