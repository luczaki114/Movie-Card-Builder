import React from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function RowLink(props) {
  return (
    <ListItem button {...props} value={props.value}>
      <ListItemText value={props.value} primary={props.text} />
    </ListItem>
  );
}

function MenuLinks(props) {
  const rowArray = [];
  for (var i = 0; i < props.rowAmount; i++) {
    rowArray.push(i + 1);
  }
  const rowLinks = rowArray.map(rowLink => (
    <RowLink
      key={rowLink}
      value={rowLink}
      text={"Row " + rowLink}
      onClick={props.changeRowClick}
    />
  ));
  return <List>{rowLinks}</List>;
}

MenuLinks.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  changeRowClick: PropTypes.func.isRequired,
  rowAmount: PropTypes.number.isRequired
};

export default MenuLinks;
