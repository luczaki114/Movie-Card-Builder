import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ROW_AMOUNT } from "../constants";
import MenuLinks from "../components/MenuLinks";
import { changeRowClick } from "../redux/actions/ui/rows";

class MenuLinksWrapper extends React.Component {
  render() {
    return (
      <MenuLinks
        rowAmount={ROW_AMOUNT}
        changeRowClick={this.props.actions.changeRowClick}
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
    actions: bindActionCreators({ changeRowClick }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuLinksWrapper);
