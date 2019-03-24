import {
  OPEN_MENU,
  CLOSE_MENU,
  SELECT_MENU_LINK
} from "../../constants/ui/menu";

export const openMenu = () => {
  return {
    type: OPEN_MENU
  };
};
export const closeMenu = () => {
  return {
    type: CLOSE_MENU
  };
};

export const selectMenuLink = payload => {
  return {
    type: SELECT_MENU_LINK,
    payload
  };
};
