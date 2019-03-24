import React from "react";
import { connect } from "react-redux";

import { stateToHTML } from "draft-js-export-html";
import richEditorOptions from "../../utils/richEditorOptions";

import { getCardsInRow } from "../../redux/selectors/cardsInRow";

import HiddenTextArea from "../../components/Cards/HiddenTextArea";

class HiddenTextAreaWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.createTextValue = this._createTextValue.bind(this);
  }

  _createRichEditorString(card) {
    const contentState = card.get("editorState").getCurrentContent();
    return stateToHTML(contentState, richEditorOptions);
  }

  _createWatchedItIcon(card) {
    let WatchedIt = "";
    if (card.get("watchedIt") === true) {
      WatchedIt = "<p>I watched it</p>";
    }
    return WatchedIt;
  }

  _createTextValue() {
    const cardArray = [];
    this.props.cardsInRow.map(card => {
      const richEditorString = this._createRichEditorString(card);
      const WatchedItString = this._createWatchedItIcon(card);

      // create newCard and include rich editor and Thumbs up text strings
      const newCard = card
        .set("editorState", richEditorString)
        .set("watchedIt", WatchedItString)
        .toJS();
      cardArray.push(newCard);
      return true;
    });

    return (
      "<section>" +
      cardArray
        .map(card => {
          return (
            "<!-- Slot " +
            card.id +
            " -->" +
            "<article>" +
            '<a href="' +
            card.link +
            '">' +
            '<img alt="' +
            card.imgAltText +
            '" class="img-responsive center-block" src="' +
            card.imgSrc +
            '" />' +
            "</a>" +
            "<h2>" +
            card.heading +
            "</h2>" +
            "<p>" +
            card.editorState +
            "</p>" +
            '<a href="' +
            card.link +
            '">' +
            '<button>Learn more <span class="sr-only"> ' +
            card.screenReaderOnly +
            "</span>" +
            "</button>" +
            "</a>" +
            card.watchedIt +
            "</article>"
          );
        })
        .join("") +
      "</section>"
    );
  }

  render() {
    const value = this.createTextValue();
    return <HiddenTextArea value={value} />;
  }
}

function mapStateToProps(state) {
  return {
    cardsInRow: getCardsInRow(state),
    activeRow: state.getIn(["UI", "rows", "activeRow"])
  };
}

export default connect(
  mapStateToProps,
  null
)(HiddenTextAreaWrapper);
