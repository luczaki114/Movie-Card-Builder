import React, { Component } from "react";
import { connect } from "react-redux";

import { getActiveCard } from "../../redux/selectors/activeCard";
import Preview from "../../components/Cards/Preview";

class PreviewWrapper extends Component {
  render() {
    return <Preview {...this.props} />;
  }
}

function mapStateToProps(state) {
  const activeCard = getActiveCard(state);
  return activeCard;
}

export default connect(
  mapStateToProps,
  null
)(PreviewWrapper);
