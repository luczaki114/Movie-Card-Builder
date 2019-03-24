import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const RichPreview = props => {
  return (
    <Typography
      component="p"
      dangerouslySetInnerHTML={{ __html: props.previewHTML }}
    />
  );
};

RichPreview.propTypes = {
  previewHTML: PropTypes.string.isRequired,
  editorState: PropTypes.object.isRequired
};

export default RichPreview;
