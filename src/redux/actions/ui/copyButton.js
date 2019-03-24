import {
  COPY_BUTTON_CLICK,
  CARD_INPUTS_MODIFIED
} from "../../constants/ui/copyButton";

export const copyButtonClick = () => {
  return {
    type: COPY_BUTTON_CLICK
  };
};

export const cardInputsModified = () => {
  return {
    type: CARD_INPUTS_MODIFIED
  };
};
