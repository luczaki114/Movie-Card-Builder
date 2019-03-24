import React, { Component } from "react";
import { connect } from "react-redux";

import App from "../components/App";

class AppWrapper extends Component {
  render() {
    return <App />;
  }
}

function mapStateToProps(state) {
  const isMenuOpen = state.getIn(["UI", "menu", "isMenuOpen"]);
  return { isMenuOpen: isMenuOpen };
}

export default connect(
  mapStateToProps,
  null
)(AppWrapper);
