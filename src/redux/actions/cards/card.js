import {
  TEXT_INPUT_CHANGE,
  TEXT_INPUT_UPDATE,
  CHECKBOX_INPUT_CHANGE,
  CHECKBOX_INPUT_UPDATE,
  ALTSRBODY_CHANGE,
  BODY_TEXT_EDITOR_CHANGE,
  BODY_TEXT_EDITOR_UPDATE
} from "../../constants/cards/card";

// on change actions
export const textInputChange = e => {
  const { target } = e;
  return {
    type: TEXT_INPUT_CHANGE,
    payload: target,
    meta: {
      cardId: true
    }
  };
};

export const checkBoxInputChange = e => {
  const { target } = e;
  return {
    type: CHECKBOX_INPUT_CHANGE,
    payload: target,
    meta: {
      cardId: true
    }
  };
};

export const altSRBodyChange = e => {
  const { target } = e;
  return {
    type: ALTSRBODY_CHANGE,
    payload: target,
    meta: {
      cardId: true
    }
  };
};

export const editorStateChange = payload => {
  return {
    type: BODY_TEXT_EDITOR_CHANGE,
    payload: {
      editorState: payload
    },
    meta: {
      cardId: true
    }
  };
};

// update actions
export const textInputUpdate = data => {
  return {
    type: TEXT_INPUT_UPDATE,
    payload: data,
    meta: {
      persist: true
    }
  };
};

export const checkBoxInputUpdate = data => {
  return {
    type: CHECKBOX_INPUT_UPDATE,
    payload: data,
    meta: {
      persist: true
    }
  };
};

export const editorStateUpdate = payload => {
  return {
    type: BODY_TEXT_EDITOR_UPDATE,
    payload,
    meta: {
      persist: true
    }
  };
};
