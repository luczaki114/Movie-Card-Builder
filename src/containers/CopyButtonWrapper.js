import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as copyButtonActions from "../redux/actions/ui/copyButton";

import CopyButton from "../components/CopyButton";

class CopyButtonWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this._onClick.bind(this);
  }

  _onClick() {
    const hiddenTextArea = document.getElementById("hiddenTextArea");
    hiddenTextArea.select();
    document.execCommand("copy");
    this.props.actions.copyButtonClick();
  }

  render() {
    const buttonText = this.props.copyButtonClicked
      ? "Copied!"
      : "Copy latest HTML";
    return (
      <CopyButton
        onClick={this.onClick}
        buttonText={buttonText}
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state) {
  const copyButtonClicked = state.getIn([
    "UI",
    "copyButton",
    "copyButtonClicked"
  ]);
  return { copyButtonClicked };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(copyButtonActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CopyButtonWrapper);
