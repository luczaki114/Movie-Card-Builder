import Immutable from "immutable";
import { ROW_AMOUNT, CARDS_PER_ROW } from "../../../constants";

let cardArray = [];
for (let i = 1; i <= ROW_AMOUNT; i++) {
  for (let j = 1; j <= CARDS_PER_ROW; j++) {
    let cardNumber = (i - 1) * CARDS_PER_ROW + j;
    cardArray.push("card" + cardNumber);
  }
}
const initialState = Immutable.fromJS(cardArray);

// slice reducers
function allCards(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default allCards;
