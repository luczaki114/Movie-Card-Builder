import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openMenu } from "../redux/actions/ui/menu";
import { clearCache } from "../redux/actions/app";
import Header from "../components/Header";

class HeaderWrapper extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

function mapStateToProps(state) {
  const isMenuOpen = state.getIn(["UI", "menu", "isMenuOpen"]);
  return { isMenuOpen: isMenuOpen };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ openMenu, clearCache }, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWrapper);
