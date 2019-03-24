import React, { Component } from "react";
import { connect } from "react-redux";
import { stateToHTML } from "draft-js-export-html";
import richEditorOptions from "../utils/richEditorOptions";
import RichPreview from "../components/RichPreview";

class RichPreviewWrapper extends Component {
  render() {
    const contentState = this.props.editorState.getCurrentContent();
    const previewHTML = stateToHTML(contentState, richEditorOptions);

    return <RichPreview previewHTML={previewHTML} {...this.props} />;
  }
}

export default connect(
  null,
  null
)(RichPreviewWrapper);
