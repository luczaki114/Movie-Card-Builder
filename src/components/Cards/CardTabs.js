import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MUITabs from "@material-ui/core/Tabs";
import MUITab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import CardTab from "./CardTab";

function Tabs(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: 56
  },
  "@media (min-width: 0px) and (orientation: landscape)": {
    appBar: {
      top: 48
    }
  },
  ["@media (min-width: " + theme.breakpoints.values.sm + "px)"]: {
    appBar: {
      top: 64
    }
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    minHeight: 24
  }
});

function CardTabs(props) {
  const { classes, activeRow } = props;

  let cardNumberArray = [];
  for (let i = 0; i < 3; i++) {
    cardNumberArray.push((activeRow - 1) * 3 + i + 1);
  }

  const MUITabList = cardNumberArray.map((cardNumber, index) => (
    <MUITab
      key={"card" + cardNumber}
      label={"Card " + cardNumber}
      tab={index}
      onClick={props.selectTab}
    />
  ));
  return (
    <div className={classes.root}>
      <div className={classes.header} />
      <AppBar color="secondary" className={classes.appBar}>
        <MUITabs value={props.activeTab} centered>
          {MUITabList}
        </MUITabs>
      </AppBar>
      <Tabs>
        <CardTab />
      </Tabs>
    </div>
  );
}

CardTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  activeTab: PropTypes.number.isRequired,
  activeRow: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired
};

export default withStyles(styles)(CardTabs);
