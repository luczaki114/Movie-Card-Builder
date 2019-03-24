import { CHANGE_ROW_CLICK, CHANGE_ROW_UPDATE } from "../../constants/ui/rows";

export const changeRowClick = e => {
  const targetValue = e.target.closest("[role='button']").getAttribute("value");
  return {
    type: CHANGE_ROW_CLICK,
    payload: targetValue
  };
};

export const changeRowUpdate = data => {
  return {
    type: CHANGE_ROW_UPDATE,
    payload: data
  };
};
