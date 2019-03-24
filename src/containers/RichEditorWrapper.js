import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Draft from "draft-js";
import { getActiveCard } from "../redux/selectors/activeCard";
import * as richEditorActions from "../redux/actions/cards/card";

import RichEditor from "../components/RichEditor";

const { RichUtils } = Draft;

class RichEditorWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this._onChange.bind(this);
    this.handleKeyCommand = this._handleKeyCommand.bind(this);
    this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
  }

  _onChange(editorState) {
    this.props.actions.editorStateChange(editorState);
  }

  _handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle)
    );
  }
  render() {
    return (
      <RichEditor
        onChange={this.onChange}
        handleKeyCommand={this.handleKeyCommand}
        toggleInlineStyle={this.toggleInlineStyle}
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state) {
  const activeCard = getActiveCard(state);
  const editorState = activeCard.editorState;
  return {
    editorState: editorState,
    currentStyle: editorState.getCurrentInlineStyle()
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(richEditorActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RichEditorWrapper);
