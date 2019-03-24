import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CardTabs from "../../components/Cards/CardTabs";
import { selectTab } from "../../redux/actions/ui/tabs";

class CardTabsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(e) {
    const payload = {
      value: parseInt(e.target.closest("[tab]").getAttribute("tab"), 10)
    };
    this.props.actions.selectTab(payload);
  }

  render() {
    return <CardTabs selectTab={this.selectTab} {...this.props} />;
  }
}

function mapStateToProps(state) {
  const activeTab = state.getIn(["UI", "tabs", "activeTab"]);
  const activeRow = state.getIn(["UI", "rows", "activeRow"]);

  return {
    activeTab,
    activeRow
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ selectTab }, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardTabsWrapper);
