import React from "react";
import { Route } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

import CardPage from "../pages/CardPage";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.default
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

function Page(props) {
  return (
    <div className={props.classes.content}>
      <div className={props.classes.drawerHeader} />
      <Route exact path="/" component={CardPage} />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Page);
