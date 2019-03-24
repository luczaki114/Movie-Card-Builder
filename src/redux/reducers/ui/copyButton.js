import Immutable from "immutable";
import {
  COPY_BUTTON_CLICK,
  CARD_INPUTS_MODIFIED
} from "../../constants/ui/copyButton";

const initialState = Immutable.fromJS({
  copyButtonClicked: false
});

function copyButtonClick(state, action) {
  const newState = state.set("copyButtonClicked", true);
  return newState;
}

function cardInputsModified(state, action) {
  const newState = state.set("copyButtonClicked", false);
  return newState;
}

export function copyButtonReducer(state = initialState, action) {
  switch (action.type) {
    case COPY_BUTTON_CLICK:
      return copyButtonClick(state, action);
    case CARD_INPUTS_MODIFIED:
      return cardInputsModified(state, action);
    default:
      return state;
  }
}
