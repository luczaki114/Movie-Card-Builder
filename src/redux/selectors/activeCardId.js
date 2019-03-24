import { createSelector } from "reselect";

const getActiveTab = state => state.getIn(["UI", "tabs", "activeTab"]);
const getActiveRow = state => state.getIn(["UI", "rows", "activeRow"]);

export const getActiveCardId = createSelector(
  getActiveRow,
  getActiveTab,
  (row, tab) => {
    return ((row - 1) * 3 + tab + 1).toString();
  }
);
