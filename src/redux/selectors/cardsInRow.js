import { createSelector } from "reselect";

const getActiveRow = state => state.getIn(["UI", "rows", "activeRow"]);
const getCardsById = state => state.getIn(["cards", "byId"]);

export const getCardsInRow = createSelector(
  getCardsById,
  getActiveRow,
  (cards, activeRow) => {
    return cards.filter(card => {
      return card.get("row") === activeRow;
    });
  }
);
