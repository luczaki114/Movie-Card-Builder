import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MenuBar from "../components/MenuBar";
import { closeMenu } from "../redux/actions/ui/menu";

class MenuBarWrapper extends React.Component {
  render() {
    return (
      <MenuBar
        isMenuOpen={this.props.isMenuOpen}
        closeMenu={this.props.actions.closeMenu}
      />
    );
  }
}

function mapStateToProps(state) {
  const isMenuOpen = state.getIn(["UI", "menu", "isMenuOpen"]);
  return { isMenuOpen: isMenuOpen };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ closeMenu }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBarWrapper);
