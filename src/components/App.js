import React from "react";
import { withStyles } from "@material-ui/core/styles";

import HeaderWrapper from "../containers/HeaderWrapper";
import MenuBarWrapper from "../containers/MenuBarWrapper";
import PageWrapper from "../containers/PageWrapper";

const styles = theme => ({
  root: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  }
});

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <HeaderWrapper />
      <MenuBarWrapper />
      <PageWrapper />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(App);
