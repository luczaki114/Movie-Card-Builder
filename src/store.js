import { createStore, applyMiddleware, compose } from "redux";
import Immutable from "immutable";
import { EditorState, convertFromRaw } from "draft-js";
import { uiMdl } from "./redux/middleware/ui";
import { cardsMdl } from "./redux/middleware/cards";
import { localStorageMdl } from "./redux/middleware/localStorage";
import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cardBuilderStore");

    if (serializedState === null) {
      return Immutable.Map({});
    }

    const state = Immutable.fromJS(JSON.parse(serializedState));
    const cards = state.getIn(["cards", "byId"]);
    const newCards = cards.map(card => {
      const rawDraftContentState = card.get("rawDraftContentState");
      let editorState = "";
      try {
        const contentState = convertFromRaw(rawDraftContentState.toJS());
        editorState = EditorState.createWithContent(contentState);
      } catch (err) {
        editorState = EditorState.createEmpty();
      }

      const newCard = card
        .delete("rawDraftContentState")
        .set("editorState", editorState);
      return newCard;
    });
    const newState = state.setIn(["cards", "byId"], newCards);
    return Immutable.Map({});
  } catch (err) {
    return Immutable.Map({});
  }
};

const initialStore = loadState();

const store = createStore(
  rootReducer,
  initialStore,
  composeEnhancers(applyMiddleware(...uiMdl, ...cardsMdl, ...localStorageMdl))
);

export default store;
