import { connect } from "react-redux";
import { createSelector } from "reselect";
import PlaylistView from "./PlaylistView";
import { fetchPlaylist } from "../../store/actions/playlistsActions";
import {
  setDisplayedCards,
  disableSelectState
} from "../../store/actions/cardsActions";
import { mapPlaylistToCards } from "./mapPlaylistToCards";
import { filterCards } from "../../utils/filterCards";
import { getQueryParams } from "../../utils/getQueryParams";

const getCardsData = state => state.cards.cardsData;
const getPlaylist = (state, ownProps) =>
  state.playlists.playlistsData[ownProps.match.params.playlistId];
const getSearchWord = (state, ownProps) => {
  const params = getQueryParams(ownProps.location.search);
  return params.s;
};

const getPlaylistCardsSelector = createSelector(
  [getPlaylist, getCardsData],
  mapPlaylistToCards
);

const getPlaylistCardsFilteredSelector = createSelector(
  [getPlaylistCardsSelector, getSearchWord],
  filterCards
);

const getCardsIdsSelector = createSelector(
  [getPlaylistCardsFilteredSelector],
  filteredCards => filteredCards.map(card => card._id)
);

const mapStateToProps = (state, ownProps) => {
  return {
    cards: getPlaylistCardsFilteredSelector(state, ownProps),
    cardsIds: getCardsIdsSelector(state, ownProps)
  };
};

export default connect(mapStateToProps, {
  fetchPlaylist,
  setDisplayedCards,
  disableSelectState
})(PlaylistView);
