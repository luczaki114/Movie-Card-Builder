import Immutable from "immutable";
import { EditorState, ContentState } from "draft-js";
import {
  TEXT_INPUT_UPDATE,
  CHECKBOX_INPUT_UPDATE,
  BODY_TEXT_EDITOR_UPDATE
} from "../../constants/cards/card";

let cardsObject = {};

// I am leaving this in here because I had the store set up programatically. Based on ROW_AMOUNT and CARDS_PER_ROW, I created a JSON object that had all of the fields set up. Some fields like the image source for a list of cards only varied by project ticket number, and the number in the series. I accounted for that in this project so that Our team does not have to update each field with a new number.
// for (let i = 1; i <= ROW_AMOUNT; i++) {
//   for (let j = 1; j <= CARDS_PER_ROW; j++) {
//     let cardNumber = (i - 1) * CARDS_PER_ROW + j;
//     let imgSrcNumber = cardNumber.toString();
//     if (imgSrcNumber.length === 1) {
//       imgSrcNumber = "0" + imgSrcNumber;
//     }
//     cardsObject[cardNumber] = {
//       id: cardNumber.toString(),
//       row: i,
//       cardNumber,
//       altSREditorText: "",
//       link: "link" + cardNumber,
//       imgSrc:
//         "Wag specific URL" + imgSrcNumber + "_306x235.jpg",
//       imgAltText: "Image Alt Text" + cardNumber,
//       heading: "Heading" + cardNumber,
//       editorState: EditorState.createEmpty(),
//       screenReaderOnly: "Screen Reader Only" + cardNumber,
//       watchedIt: false
//     };
//   }
// }

cardsObject = {
  "1": {
    id: "1",
    row: 1,
    cardNumber: 1,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Spirited_Away",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png",
    imgAltText: "Spirited Away Movie Poster",
    heading: "Spirited Away",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        "Spirited Away (Japanese: 千と千尋の神隠し Hepburn: Sen to Chihiro no Kamikakushi, \"Sen and Chihiro's Spiriting Away\") is a 2001 Japanese animated coming-of-age fantasy film written and directed by Hayao Miyazaki, animated by Studio Ghibli for Tokuma Shoten, Nippon Television Network, Dentsu, Buena Vista Home Entertainment, Tohokushinsha Film and Mitsubishi and distributed by Toho.[6] The film stars Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takeshi Naito, Yasuko Sawaguchi, Tsunehiko Kamijō, Takehiko Ono, and Bunta Sugawara, and tells the story of Chihiro Ogino (Hiiragi), a sullen 10-year-old girl who, while moving to a new neighborhood, enters the world of Kami (spirits) of Japanese Shinto-Buddhist folklore.[7] After her parents are transformed into pigs by the witch Yubaba (Natsuki), Chihiro takes a job working in Yubaba's bathhouse to find a way to free herself and her parents and return to the human world."
      )
    ),
    screenReaderOnly: "About Spirited Away",
    watchedIt: true
  },
  "2": {
    id: "2",
    row: 1,
    cardNumber: 2,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Howls-moving-castleposter.jpg",
    imgAltText: "Howl's Moving Castle Movie Poster",
    heading: "Howl's Moving Castle",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        "Howl's Moving Castle (Japanese: ハウルの動く城 Hepburn: Hauru no Ugoku Shiro) is a 2004 Japanese animated fantasy film written and directed by Hayao Miyazaki. The film is loosely based on the 1986 novel of the same name by British author Diana Wynne Jones. The film was produced by Toshio Suzuki, animated by Studio Ghibli and distributed by Toho. The Japanese voice cast featured Chieko Baisho and Takuya Kimura, while the version dubbed in English starred Jean Simmons, Emily Mortimer, Lauren Bacall and Christian Bale."
      )
    ),
    screenReaderOnly: "about Howl's Moving Castle",
    watchedIt: true
  },
  "3": {
    id: "3",
    row: 1,
    cardNumber: 3,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Princess_Mononoke",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/Princess_Mononoke_Japanese_poster.png",
    imgAltText: "Princess Mononoke Movie Poster",
    heading: "Princess Mononoke",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        'Princess Mononoke (Japanese: もののけ姫 Hepburn: Mononoke-hime, "Spirit/Monster Princess") is a 1997 Japanese animated epic historical fantasy war film written and directed by Hayao Miyazaki, animated by Studio Ghibli for Tokuma Shoten, Nippon Television Network and Dentsu, and distributed by Toho. The film stars the voices of Yōji Matsuda, Yuriko Ishida, Yūko Tanaka, Kaoru Kobayashi, Masahiko Nishimura, Tsunehiko Kamijo, Akihiro Miwa, Mitsuko Mori and Hisaya Morishige.'
      )
    ),
    screenReaderOnly: "about Princess Mononoke",
    watchedIt: true
  },
  "4": {
    id: "4",
    row: 2,
    cardNumber: 4,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Castle_in_the_Sky",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png",
    imgAltText: "Castle in the Sky Movie Poster",
    heading: "Castle in the Sky",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        "Castle in the Sky (Japanese: 天空の城ラピュタ Hepburn: Tenkū no Shiro Rapyuta), known as Laputa: Castle in the Sky in Europe and Australia, is a 1986 Japanese animated steampunk fantasy-adventure film written and directed by Hayao Miyazaki.[1][2] It was the very first film animated by Studio Ghibli and was animated for Tokuma Shoten. It follows the adventures of a young boy and girl attempting to keep a magic crystal from a group of military agents, while searching for a legendary floating castle. The film was distributed by Toei Kabushiki Kaisha.[3]"
      )
    ),
    screenReaderOnly: "about Castle in the Sky",
    watchedIt: true
  },
  "5": {
    id: "5",
    row: 2,
    cardNumber: 5,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Kiki%27s_Delivery_Service",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/0/07/Kiki%27s_Delivery_Service_%28Movie%29.jpg",
    imgAltText: "Kiki's Delivery Service Movie Poster",
    heading: "Kiki's Delivery Service",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        "Kiki's Delivery Service (Japanese: 魔女の宅急便 Hepburn: Majo no Takkyūbin, \"Witch's Delivery Service\") is a 1989 Japanese animated coming-of-age fantasy film[2] written, produced, and directed by Hayao Miyazaki as an adaptation of the 1985 novel of the same name by Eiko Kadono. It was animated by Studio Ghibli for Tokuma Shoten, Yamato Transport and the Nippon Television Network and distributed by the Toei Company. The film tells the story of a young witch, Kiki, who moves to a new town and uses her flying ability to earn a living. According to Miyazaki, the movie portrays the gulf between independence and reliance in teenage Japanese girls.[3]"
      )
    ),
    screenReaderOnly: "about Kiki's Delivery Service",
    watchedIt: true
  },
  "6": {
    id: "6",
    row: 2,
    cardNumber: 6,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Ponyo",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Ponyo_%282008%29.png",
    imgAltText: "Ponyo Movie Poster",
    heading: "Ponyo",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        'Ponyo (Japanese: 崖の上のポニョ Hepburn: Gake no Ue no Ponyo, literally "Ponyo on the Cliff"), initially titled in English and released in Asia as Ponyo on the Cliff by the Sea,[3][4] is a 2008 Japanese animated fantasy film written and directed by Hayao Miyazaki, animated by Studio Ghibli for the Nippon Television Network, Dentsu, Hakuhodo DY Media Partners, Buena Vista Home Entertainment, Mitsubishi and Toho, and distributed by the latter company. [5] It is the eighth film Miyazaki directed for Ghibli, and his tenth overall. The film stars the voices of Tomoko Yamaguchi, Kazushige Nagashima, Yūki Amami, George Tokoro, Yuria Nara, Hiroki Doi, Rumi Hiiragi, Akiko Yano, Kazuko Yoshiyuki and Tomoko Naraoka. The plot centers on a goldfish named Ponyo who befriends a five-year-old human boy, Sōsuke, and wants to become a human girl.'
      )
    ),
    screenReaderOnly: "about Ponyo",
    watchedIt: false
  },
  "7": {
    id: "7",
    row: 3,
    cardNumber: 7,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/My_Neighbor_Totoro",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
    imgAltText: "My Neighbor Totoro Movie Poster",
    heading: "My Neighbor Totoro",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        "My Neighbor Totoro (Japanese: となりのトトロ Hepburn: Tonari no Totoro) is a 1988 Japanese animated fantasy film written and directed by Hayao Miyazaki and animated by Studio Ghibli for Tokuma Shoten. The film—which stars the voice actors Noriko Hidaka, Chika Sakamoto, and Hitoshi Takagi—tells the story of the two young daughters (Satsuki and Mei) of a professor and their interactions with friendly wood spirits in postwar rural Japan. The film won the Animage Anime Grand Prix prize and the Mainichi Film Award and Kinema Junpo Award for Best Film in 1988. It also received the Special Award at the Blue Ribbon Awards in the same year."
      )
    ),
    screenReaderOnly: "about My Neighbor Totoro",
    watchedIt: false
  },
  "8": {
    id: "8",
    row: 3,
    cardNumber: 8,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Porco_Rosso",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Porco_Rosso_%28Movie_Poster%29.jpg",
    imgAltText: "Porco Rosso Movie Poster",
    heading: "Porco Rosso",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        'Porco Rosso (Japanese: 紅の豚 Hepburn: Kurenai no Buta, lit. Crimson Pig) is a 1992 Japanese animated comedy-adventure film written and directed by Hayao Miyazaki. It is based on Hikōtei Jidai ("The Age of the Flying Boat"), a three-part watercolor manga by Miyazaki.[4] The film stars the voices of Shūichirō Moriyama, Tokiko Kato, Akemi Okamura and Akio Ōtsuka. Toshio Suzuki produced the film. It was animated by Studio Ghibli for Tokuma Shoten, Japan Airlines and the Nippon Television Network and distributed by Toho. Joe Hisaishi composed the music.'
      )
    ),
    screenReaderOnly: "about Porco Rosso",
    watchedIt: true
  },
  "9": {
    id: "9",
    row: 3,
    cardNumber: 9,
    altSREditorText: "",
    link: "https://en.wikipedia.org/wiki/Arrietty",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Karigurashi_no_Arrietty_poster.png",
    imgAltText: "Arrietty Movie Poster",
    heading: "Arrietty",
    editorState: EditorState.createWithContent(
      ContentState.createFromText(
        "Arrietty, titled The Borrower Arrietty (Japanese: 借りぐらしのアリエッティ Hepburn: Kari-gurashi no Arietti) in Japan and The Secret World of Arrietty in North America, is a 2010 Japanese animated fantasy film directed by Hiromasa Yonebayashi as his feature film debut as a director, animated by Studio Ghibli for the Nippon Television Network, Dentsu, Hakuhodo DY Media Partners, Walt Disney Japan, Mitsubishi, Toho and Wild Bunch, and distributed by Toho. The novel was adapted as a screenplay by Hayao Miyazaki and Keiko Niwa,[2] based on The Borrowers by Mary Norton, an English author of children's books, about a family of tiny people who live secretly in the walls and floors of a typical household, borrowing items from humans to survive. The film stars the voices of Mirai Shida, Ryunosuke Kamiki, Shinobu Otake, Keiko Takeshita, Tatsuya Fujiwara, Tomokazu Miura, and Kirin Kiki, and tells the story of a young Borrower (Shida) befriending a human boy (Kamiki), while trying to avoid being detected by the other humans."
      )
    ),
    screenReaderOnly: "about Arrietty",
    watchedIt: false
  }
};

const initialState = Immutable.fromJS(cardsObject);

// case reducers
function updateTextValue(state, action) {
  const { payload } = action;
  const { cardId, inputId, inputValue } = payload;
  const newState = state.setIn([cardId, inputId], inputValue);
  return newState;
}

function updateCheckBoxValue(state, action) {
  const { payload } = action;
  const { cardId, inputId } = payload;
  const toggledValue = !state.getIn([cardId, inputId]);
  const newState = state.setIn([cardId, inputId], toggledValue);

  return newState;
}

function editorStateUpdate(state, action) {
  const { payload } = action;
  const { cardId, editorState } = payload;
  const newState = state.setIn([cardId, "editorState"], editorState);
  return newState;
}

// slice reducers
function byId(state = initialState, action) {
  switch (action.type) {
    case TEXT_INPUT_UPDATE:
      return updateTextValue(state, action);
    case CHECKBOX_INPUT_UPDATE:
      return updateCheckBoxValue(state, action);
    case BODY_TEXT_EDITOR_UPDATE:
      return editorStateUpdate(state, action);
    default:
      return state;
  }
}

export default byId;
