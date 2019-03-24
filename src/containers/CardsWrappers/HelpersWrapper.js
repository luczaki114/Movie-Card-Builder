import React, { Component } from "react";
import { connect } from "react-redux";

import { getActiveCard } from "../../redux/selectors/activeCard";
import { altSRBodyChange } from "../../redux/actions/cards/card";
import Helpers from "../../components/Cards/Helpers";

class HelpersWrapper extends Component {
  render() {
    return <Helpers {...this.props} />;
  }
}

function mapStateToProps(state) {
  const activeCard = getActiveCard(state);
  return {
    altSREditorText: activeCard.altSREditorText
  };
}

export default connect(
  mapStateToProps,
  { altSRBodyChange }
)(HelpersWrapper);
