import { createSelector } from "reselect";
import { getActiveCardId } from "./activeCardId";
import { getCardJSON } from "../../utils/getCardJSON";

const getCardsById = state => state.getIn(["cards", "byId"]);

export const getActiveCard = createSelector(
  getCardsById,
  getActiveCardId,
  (cards, activeCard) => {
    const cardJSON = getCardJSON(
      cards
        .filter(card => {
          return card.get("id") === activeCard;
        })
        .first()
    );
    return cardJSON;
  }
);
