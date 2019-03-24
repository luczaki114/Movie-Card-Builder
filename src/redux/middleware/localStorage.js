import { convertToRaw } from "draft-js";
import Immutable from "immutable";
import { getActiveCard } from "../selectors/activeCard";
import { getActiveCardId } from "../selectors/activeCardId";

const persistAllData = store => {
  const state = store.getState();
  const newCards = state.getIn(["cards", "byId"]).map(card => {
    const rawDraftContentState = convertToRaw(
      card.get("editorState").getCurrentContent()
    );
    const newCard = card.set("rawDraftContentState", rawDraftContentState);
    return newCard;
  });

  const newState = state.setIn(["cards", "byId"], newCards);

  localStorage["cardBuilderStore"] = JSON.stringify(newState);
};

const persistSingleCard = store => {
  const state = store.getState();
  const activeCardId = getActiveCardId(state);
  const activeCard = Immutable.fromJS(getActiveCard(state));

  const rawDraftContentState = convertToRaw(
    activeCard.get("editorState").getCurrentContent()
  );
  const newCard = activeCard
    .set("rawDraftContentState", rawDraftContentState)
    .delete("editorState");

  const newState = state.setIn(["cards", "byId", activeCardId], newCard);

  localStorage.setItem(["cardBuilderStore"], JSON.stringify(newState));
};

const persistDataLocally = store => next => action => {
  next(action);
  if (action.meta && action.meta.persist === true) {
    if (localStorage.getItem("cardBuilderStore") === null) {
      // persistAllData(store);
    } else {
      // persistSingleCard(store);
    }
  }
};

export const localStorageMdl = [persistDataLocally];
