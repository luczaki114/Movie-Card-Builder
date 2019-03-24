import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import RichEditorWrapper from "../../containers/RichEditorWrapper";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2
  },
  textField: {
    width: "100%"
  },
  formGroup: {
    width: "100%"
  }
});

function Builder(props) {
  const { classes, theme } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="subheading">Builder</Typography>
      <Divider light />
      <form noValidate autoComplete="off">
        <Grid container spacing={theme.spacing.unit * 2}>
          <Grid item xs={12}>
            <TextField
              id="link"
              label="Link"
              className={classes.textField}
              value={props.link}
              onChange={props.onTextInputChange}
              margin="dense"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="imgSrc"
              label="Image Src"
              className={classes.textField}
              value={props.imgSrc}
              onChange={props.onTextInputChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="imgAltText"
              label="Image Alt Text"
              className={classes.textField}
              value={props.imgAltText}
              onChange={props.onTextInputChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="heading"
              label="Heading"
              multiline
              rowsMax="4"
              className={classes.textField}
              value={props.heading}
              onChange={props.onTextInputChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} container>
            <Typography variant="title">Body Text</Typography>
            <RichEditorWrapper />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="screenReaderOnly"
              label="Screen Reader Only"
              multiline
              rowsMax="4"
              className={classes.textField}
              value={props.screenReaderOnly}
              onChange={props.onTextInputChange}
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup row className={classes.formGroup}>
              <FormControlLabel
                control={
                  <Switch
                    checked={props.watchedIt}
                    onChange={props.onCheckBoxChange}
                    id="watchedIt"
                    color="primary"
                  />
                }
                label="Thumbs up?"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

Builder.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  editorState: PropTypes.object.isRequired,
  screenReaderOnly: PropTypes.string.isRequired,
  watchedIt: PropTypes.bool.isRequired,
  onTextInputChange: PropTypes.func.isRequired,
  onCheckBoxChange: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Builder);
