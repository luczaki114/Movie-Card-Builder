import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import MenuLinksWrapper from "../containers/MenuLinksWrapper";

const styles = theme => ({
  menuBarPaper: {
    position: "relative",
    width: theme.menuBarWidth
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

function MenuBar(props) {
  const { classes } = props;

  const MenuList = (
    <div>
      <div className={classes.toolbar}>
        <IconButton onClick={props.closeMenu}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <MenuLinksWrapper />
    </div>
  );
  return (
    <div>
      <Drawer
        variant="temporary"
        open={props.isMenuOpen}
        onClose={props.closeMenu}
        classes={{ paper: classes.menuBarPaper }}
        ModalProps={{
          keepMounted: true
        }}
      >
        {MenuList}
      </Drawer>
    </div>
  );
}

MenuBar.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(MenuBar);
