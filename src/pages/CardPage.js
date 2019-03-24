import React from "react";
import { connect } from "react-redux";
import Card from "../components/Cards";

class CardPage extends React.Component {
  render() {
    return <Card {...this.props} />;
  }
}

export default connect(
  null,
  null
)(CardPage);
