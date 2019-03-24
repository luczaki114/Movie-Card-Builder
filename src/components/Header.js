import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = theme => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 12
  },
  toolBar: {
    padding: 0
  },
  cacheButton: {
    marginLeft: "auto",
    marginRight: theme.spacing.unit
  },
  buttonText: {
    display: "none"
  },
  ["@media (min-width: " + theme.breakpoints.values.sm + "px)"]: {
    buttonText: {
      display: "block",
      marginRight: theme.spacing.unit
    }
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <AppBar>
      <Toolbar className={classes.toolBar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={props.actions.openMenu}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Product Card Builder
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.cacheButton}
          onClick={props.actions.clearCache}
        >
          <span className={classes.buttonText}>Clear Cache</span>
          <DeleteIcon className={classes.deleteIcon} />
        </Button>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    openMenu: PropTypes.func.isRequired,
    clearCache: PropTypes.func.isRequired
  }),
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Header);
