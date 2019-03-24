import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
  textarea: {
    position: "absolute",
    left: "-9999px"
  }
});

const HiddenTextArea = props => {
  const { classes } = props;

  return (
    <textarea
      readOnly
      className={classes.textarea}
      id="hiddenTextArea"
      value={props.value}
    />
  );
};

HiddenTextArea.propTypes = {
  value: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(HiddenTextArea);
