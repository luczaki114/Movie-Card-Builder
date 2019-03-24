import React, { Component } from "react";
import { connect } from "react-redux";

import { getActiveCard } from "../../redux/selectors/activeCard";
import {
  textInputChange,
  checkBoxInputChange
} from "../../redux/actions/cards/card";
import Builder from "../../components/Cards/Builder";

class BuilderWrapper extends Component {
  render() {
    const { checkBoxInputChange, textInputChange } = this.props;
    return (
      <Builder
        onTextInputChange={textInputChange}
        onCheckBoxChange={checkBoxInputChange}
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state) {
  const activeCard = getActiveCard(state);
  return activeCard;
}

export default connect(
  mapStateToProps,
  { checkBoxInputChange, textInputChange }
)(BuilderWrapper);
