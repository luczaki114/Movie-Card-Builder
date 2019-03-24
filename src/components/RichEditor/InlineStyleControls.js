import React from "react";
import PropTypes from "prop-types";
import StyleButton from "./StyleButton";

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD" },
  { label: "SuperScript", style: "SUPERSCRIPT" }
];

const InlineStyleControls = props => {
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={props.currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

InlineStyleControls.propTypes = {
  currentStyle: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default InlineStyleControls;
