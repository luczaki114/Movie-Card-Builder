import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Preview from "./Preview";
import HiddenTextAreaWrapper from "../../containers/CardsWrappers/HiddenTextAreaWrapper";
import CopyButtonWrapper from "../../containers/CopyButtonWrapper";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  paper: {
    padding: theme.spacing.unit * 2
  },
  allCardPreviewContainer: {
    marginTop: 0
  },
  ["@media( min-width: " + theme.breakpoints.values.sm + "px)"]: {
    paper: {
      position: "relative"
    },
    subHeading: {
      height: theme.spacing.unit * 4,
      lineHeight: theme.spacing.unit * 4 + "px",
      marginBottom: theme.spacing.unit
    }
  }
});

const PreviewAllCards = props => {
  const { classes } = props;
  const cardList = props.cardArray.map(card => (
    <Grid key={card.id} item xs={12} sm={4}>
      <Preview showHeading={false} {...card} />
    </Grid>
  ));
  return (
    <div className={classes.root}>
      <HiddenTextAreaWrapper />
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="subheading" className={classes.subHeading}>
              All Cards Preview
            </Typography>
            <CopyButtonWrapper />
            <Divider light />
            <Grid
              container
              spacing={24}
              className={
                classes.allCardPreviewContainer + " allCardPreviewContainer"
              }
            >
              {cardList}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

PreviewAllCards.propTypes = {
  cardArray: PropTypes.array.isRequired
};

export default withStyles(styles, { withTheme: true })(PreviewAllCards);
