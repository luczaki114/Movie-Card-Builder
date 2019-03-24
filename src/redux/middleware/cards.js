import { EditorState, ContentState } from "draft-js";
import {
  TEXT_INPUT_CHANGE,
  CHECKBOX_INPUT_CHANGE,
  ALTSRBODY_CHANGE,
  BODY_TEXT_EDITOR_CHANGE
} from "../constants/cards/card";
import { getActiveCardId } from "../selectors/activeCardId";
import {
  textInputUpdate,
  checkBoxInputUpdate,
  editorStateUpdate
} from "../actions/cards/card";

// meta tag to enrich action with active cardId.
const processCardIdMeta = store => next => action => {
  if (action.meta && action.meta.cardId === true) {
    const state = store.getState();
    const activeCardId = getActiveCardId(state);

    if (action.payload) {
      action.payload.cardId = activeCardId;
    } else {
      action.payload = {
        cardId: activeCardId
      };
    }

    next(action);
  } else {
    next(action);
  }
};

const altSRTextInputsFlow = store => next => action => {
  if (action.type === ALTSRBODY_CHANGE) {
    const { cardId, value } = action.payload;
    const fieldArray = ["altSREditorText", "imgAltText", "screenReaderOnly"];
    fieldArray.map(field => {
      const data = {
        cardId: cardId,
        inputId: field,
        inputValue: value
      };
      return store.dispatch(textInputUpdate(data));
    });
    next(action);
  } else {
    next(action);
  }
};

// This could use a refactor. Ideally it would only update the first content block, and return any other content blocks that were already started.
const altSREditorFlow = store => next => action => {
  if (action.type === ALTSRBODY_CHANGE) {
    const { payload } = action;
    const { cardId, value } = payload;
    const state = store.getState();
    const activeCardId = getActiveCardId(state);
    const editorState = state.getIn([
      "cards",
      "byId",
      activeCardId,
      "editorState"
    ]);
    const newContentState = ContentState.createFromText(value);
    const newEditorState = EditorState.push(editorState, newContentState);
    const data = {
      cardId,
      editorState: newEditorState
    };
    store.dispatch(editorStateUpdate(data));
  } else {
    next(action);
  }
};

const editorStateFlow = store => next => action => {
  if (action.type === BODY_TEXT_EDITOR_CHANGE) {
    const { payload } = action;
    const { cardId, editorState } = payload;
    const data = {
      cardId,
      editorState
    };
    store.dispatch(editorStateUpdate(data));
  } else {
    next(action);
  }
};

const textInputsFlow = store => next => action => {
  if (action.type === TEXT_INPUT_CHANGE) {
    const { cardId, id, value } = action.payload;
    const data = {
      cardId,
      inputId: id,
      inputValue: value
    };
    store.dispatch(textInputUpdate(data));
  } else {
    next(action);
  }
};

const checkBoxInputsFlow = store => next => action => {
  if (action.type === CHECKBOX_INPUT_CHANGE) {
    const { cardId, id } = action.payload;
    const data = {
      cardId,
      inputId: id
    };
    store.dispatch(checkBoxInputUpdate(data));
  } else {
    next(action);
  }
};

export const cardsMdl = [
  processCardIdMeta,
  altSRTextInputsFlow,
  altSREditorFlow,
  editorStateFlow,
  textInputsFlow,
  checkBoxInputsFlow
];
