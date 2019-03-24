import React from "react";
import { connect } from "react-redux";

import PreviewAllCards from "../../components/Cards/PreviewAllCards";
import { getCardsInRow } from "../../redux/selectors/cardsInRow";

import { getCardJSON } from "../../utils/getCardJSON";

class PreviewAllCardsWrapper extends React.Component {
  render() {
    const cardArray = [];
    this.props.cardsInRow.map(card => {
      const newCard = getCardJSON(card);
      cardArray.push(newCard);
      return true;
    });
    return <PreviewAllCards cardArray={cardArray} {...this.props} />;
  }
}

function mapStateToProps(state) {
  return { cardsInRow: getCardsInRow(state) };
}

export default connect(
  mapStateToProps,
  null
)(PreviewAllCardsWrapper);
