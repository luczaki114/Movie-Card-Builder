import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  paper: {
    width: "100%",
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1.5
  },
  textField: {
    width: "100%"
  },
  formGroup: {
    width: "100%"
  }
});

const Helpers = props => {
  const { classes } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="subheading"> Helpers</Typography>
      <Divider light />
      <form noValidate autoComplete="off">
        <TextField
          id="altSREditorText"
          label="Alt, SR, and Body Text"
          className={classes.textField}
          value={props.altSREditorText}
          helperText="Set text for all fields at the same time. Beware! It will overwrite previous changes."
          onChange={props.altSRBodyChange}
          margin="dense"
          fullWidth
        />
      </form>
    </Paper>
  );
};

Helpers.propTypes = {
  altSREditorText: PropTypes.string.isRequired,
  altSRBodyChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Helpers);
