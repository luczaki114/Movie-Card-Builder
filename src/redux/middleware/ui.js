import { CHANGE_ROW_CLICK } from "../constants/ui/rows";
import {
  TEXT_INPUT_UPDATE,
  CHECKBOX_INPUT_UPDATE,
  ALTSRBODY_UPDATE,
  BODY_TEXT_EDITOR_UPDATE
} from "../constants/cards/card";
import { cardInputsModified } from "../actions/ui/copyButton";
import { changeRowUpdate } from "../actions/ui/rows";
import { selectTab } from "../actions/ui/tabs";
import { closeMenu } from "../actions/ui/menu";

const changeRow = store => next => action => {
  if (action.type === CHANGE_ROW_CLICK) {
    const value = parseInt(action.payload, 10);
    const payload = {
      value
    };
    store.dispatch(changeRowUpdate(payload));
    store.dispatch(selectTab({ value: 0 }));
    store.dispatch(closeMenu());
  } else {
    next(action);
  }
};

const processCardFieldUpdate = store => next => action => {
  if (
    action.type === TEXT_INPUT_UPDATE ||
    action.type === CHECKBOX_INPUT_UPDATE ||
    action.type === ALTSRBODY_UPDATE ||
    action.type === BODY_TEXT_EDITOR_UPDATE
  ) {
    // this isn't a perfect implementation. the draft.js editor has a complex state that includes selection and focus, so just by clicking on the editor, you are in fact changing the state and running the BODY_TEXT_EDITOR_UPDATE action. In order to make this fully correct I need to look through history and compare the content state block maps of the last state and current state, but the undustack for draft.js is picky about what it puts on its undo stack, so not every charachter added is in the undo stack.
    console.log(
      store.getState().getIn(["UI", "copyButton", "copyButtonClicked"])
    );
    if (
      store.getState().getIn(["UI", "copyButton", "copyButtonClicked"]) === true
    ) {
      store.dispatch(cardInputsModified());
    }
    next(action);
  } else {
    next(action);
  }
};

export const uiMdl = [changeRow, processCardFieldUpdate];
