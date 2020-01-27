import { connect } from "react-redux";
import PlaylistEditView from "./PlaylistEditView";
import {
  setSelectedCards,
  clearSelectedCards
} from "../../store/actions/cardsActions";
import {
  fetchPlaylist,
  setPlaylistForEdit,
  disablePlaylistEditState
} from "../../store/actions/playlistsActions";
import { sortCardsSelected } from "./sortCardsSelected";

const mapStateToProps = (state, ownProps) => {
  const { playlistId } = ownProps.match.params;
  const playlist = state.playlists.playlistsData[playlistId];
  const cards = Object.values(state.cards.cardsData);
  const playlistCardsIds = playlist ? playlist.cardsIds : [];
  const selectedCardsIds = state.cards.selectedCardsIds;

  return {
    playlistCardsIds,
    loadingCards: state.cards.loading,
    cards: sortCardsSelected(cards, selectedCardsIds)
  };
};

export default connect(mapStateToProps, {
  setPlaylistForEdit,
  disablePlaylistEditState,
  fetchPlaylist,
  setSelectedCards,
  clearSelectedCards
})(PlaylistEditView);
