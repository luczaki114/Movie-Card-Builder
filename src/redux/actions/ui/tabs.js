import { SELECT_TAB } from "../../constants/ui/tabs";

export const selectTab = payload => {
  return {
    type: SELECT_TAB,
    payload: payload
  };
};
