import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getQueryParams } from "../../utils/getQueryParams";
import { mapPlaylistToCards } from "../PlaylistView/mapPlaylistToCards";
import { fetchPlaylists } from "../../store/actions/playlistsActions";
import FlashcardsView from "./FlashcardsView";

const getCardsData = state => state.cards.cardsData;
const getPlaylistsData = state => state.playlists.playlistsData;

const getCardsArray = createSelector([getCardsData], cardsData =>
  Object.values(cardsData)
);

const getFlashcardsParams = (state, ownProps) => {
  return getQueryParams(ownProps.location.search);
};

const flashcardsToDisplay = createSelector(
  [getFlashcardsParams, getCardsArray, getPlaylistsData, getCardsData],
  (params, allCards, playlistsData, cardsData) => {
    switch (params.type) {
      case "all":
        return allCards;
      case "playlists":
        if (!playlistsData[params.id]) return [];
        const playlist = playlistsData[params.id];
        return mapPlaylistToCards(playlist, cardsData);
      default:
        return allCards;
    }
  }
);

const mapStateToProps = (state, ownProps) => {
  return {
    isDesktop: state.ui.isDesktop,
    invertedSlides: state.ui.invertedSlides,
    flashcards: flashcardsToDisplay(state, ownProps)
  };
};

export default connect(mapStateToProps, { fetchPlaylists })(FlashcardsView);
