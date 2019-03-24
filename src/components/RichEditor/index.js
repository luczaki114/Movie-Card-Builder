import React from "react";
import PropTypes from "prop-types";
import { Editor } from "draft-js";

import InlineStyleControls from "./InlineStyleControls";

// Custom overrides for "code" style.
const styleMap = {
  SUPERSCRIPT: {
    fontSize: "0.6em",
    verticalAlign: "super"
  }
};

function RichEditor(props) {
  const editorState = props.editorState;
  // If the user changes block type before entering any text, we can
  // either style the placeholder or hide it. Let's just hide it now.
  let className = "RichEditor-editor";
  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (
      contentState
        .getBlockMap()
        .first()
        .getType() !== "unstyled"
    ) {
      className += " RichEditor-hidePlaceholder";
    }
  }
  return (
    <div className="RichEditor-root">
      <InlineStyleControls
        editorState={props.editorState}
        onToggle={props.toggleInlineStyle}
        currentStyle={props.currentStyle}
      />
      <div className={className}>
        <Editor
          customStyleMap={styleMap}
          editorState={props.editorState}
          handleKeyCommand={props.handleKeyCommand}
          onChange={props.onChange}
          placeholder="Tell a story..."
          spellCheck={true}
        />
      </div>
    </div>
  );
}

RichEditor.propTypes = {
  editorState: PropTypes.object.isRequired,
  currentStyle: PropTypes.object.isRequired,
  toggleInlineStyle: PropTypes.func.isRequired,
  handleKeyCommand: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RichEditor;
