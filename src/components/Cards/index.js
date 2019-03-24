import React from "react";

import CardTabsWrapper from "../../containers/CardsWrappers/CardTabsWrapper";
import PreviewAllCardsWrapper from "../../containers/CardsWrappers/PreviewAllCardsWrapper";

const Card = props => {
  return (
    <div>
      <CardTabsWrapper activeRow={1} />
      <PreviewAllCardsWrapper activeRow={1} />
    </div>
  );
};

export default Card;
