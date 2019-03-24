import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Page from "../components/Page";

class PageWrapper extends React.Component {
  static propTypes = {
    isMenuOpen: PropTypes.bool.isRequired
  };

  render() {
    return <Page isMenuOpen={this.props.isMenuOpen} />;
  }
}

function mapStateToProps(state) {
  const isMenuOpen = state.getIn(["UI", "menu", "isMenuOpen"]);
  return { isMenuOpen: isMenuOpen };
}

export default connect(
  mapStateToProps,
  null
)(PageWrapper);
