import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  copyButton: {
    margin: theme.spacing.unit + "px 0"
  },
  ["@media( min-width: " + theme.breakpoints.values.sm + "px)"]: {
    copyButton: {
      position: "absolute",
      top: theme.spacing.unit * 2 + "px",
      right: theme.spacing.unit * 2 + "px",
      margin: 0
    }
  }
});

function CopyButton(props) {
  const { classes } = props;
  return (
    <Button
      className={classes.copyButton}
      variant="contained"
      size="small"
      color={props.copyButtonClicked === true ? "primary" : "secondary"}
      onClick={props.onClick}
    >
      {props.buttonText}
    </Button>
  );
}

CopyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  copyButtonClicked: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(CopyButton);
