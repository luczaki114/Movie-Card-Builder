export const getCardJSON = card => {
  return {
    altSREditorText: card.get("altSREditorText"),
    watchedIt: card.get("watchedIt"),
    cardNumber: card.get("cardNumber"),
    editorState: card.get("editorState"),
    heading: card.get("heading"),
    id: card.get("id"),
    imgAltText: card.get("imgAltText"),
    imgSrc: card.get("imgSrc"),
    link: card.get("link"),
    row: card.get("row"),
    screenReaderOnly: card.get("screenReaderOnly")
  };
};
