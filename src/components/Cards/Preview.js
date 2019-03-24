import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import RichPreviewWrapper from "./../../containers/RichPreviewWrapper";
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import Grid from "@material-ui/core/Grid";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  cardWatched: {
    display: "flex",
    padding: "8px " + theme.spacing.unit * 2 + "px",
    color: red[500],
    boxSizing: "border-box",
    alignItems: "center",
    height: "44px"
  },
  watched: {
    color: green[500]
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 1.5
  },
  media: {
    paddingTop: "150%"
  }
});

const Heading = props => {
  if (props.showHeading === true) {
    return (
      <div>
        <Typography variant="subheading">Preview</Typography>
        <Divider light />
      </div>
    );
  } else {
    return null;
  }
};

Heading.propTypes = {
  showHeading: PropTypes.bool.isRequired
};

const WatchedIt = props => {
  if (props.watchedIt === true) {
    return (
      <Grid container direction="row" alignItems="center" spacing={8}>
        <Grid item>
          <ThumbsUpIcon />
        </Grid>
        <Grid item>Watched it!</Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container direction="row" alignItems="center" spacing={8}>
        <Grid item>
          <PersonalVideoIcon />
        </Grid>
        <Grid item>Didn't watch it yet!</Grid>
      </Grid>
    );
  }
};

WatchedIt.propTypes = {
  watchedIt: PropTypes.bool.isRequired
};

const Preview = props => {
  const { classes } = props;
  return (
    <Paper className={props.showHeading ? classes.paper : ""}>
      <Heading showHeading={props.showHeading} />
      <Card className={classes.card}>
        <CardActionArea>
          <Link to={props.link}>
            <CardMedia
              className={classes.media}
              image={props.imgSrc}
              title={props.imgAltText}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <RichPreviewWrapper editorState={props.editorState} />
          </CardContent>
        </CardActionArea>
        <div
          className={
            classes.cardWatched + " " + (props.watchedIt ? classes.watched : "")
          }
        >
          <WatchedIt watchedIt={props.watchedIt} />
        </div>
        <CardActions>
          <Button size="small" color="primary" component={Link} to={props.link}>
            Learn More
            <Typography variant="srOnly">{props.screenReaderOnly}</Typography>
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

Preview.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAltText: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  editorState: PropTypes.object.isRequired,
  screenReaderOnly: PropTypes.string.isRequired,
  watchedIt: PropTypes.bool.isRequired,
  showHeading: PropTypes.bool.isRequired
};

export default withStyles(styles, { withTheme: true })(Preview);
