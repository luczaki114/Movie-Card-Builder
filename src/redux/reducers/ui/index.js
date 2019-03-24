import { combineReducers } from "redux-immutable";
import { menuReducer } from "./menu";
import { tabsReducer } from "./tabs";
import { rowsReducer } from "./rows";
import { copyButtonReducer } from "./copyButton";

export const UIReducer = combineReducers({
  menu: menuReducer,
  tabs: tabsReducer,
  rows: rowsReducer,
  copyButton: copyButtonReducer
});

export default UIReducer;
