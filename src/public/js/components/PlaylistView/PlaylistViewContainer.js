import { connect } from "react-redux";
import PlaylistView from "./PlaylistView";
import { fetchPlaylist } from "../../store/actions/playlistsActions";
import { mapPlaylistToCards } from "./mapPlaylistToCards";

const mapStateToProps = (state, ownProps) => {
  const { playlistId } = ownProps.match.params;
  const playlist = state.playlists.playlistsData[playlistId];
  const { cardsData } = state.cards;
  return {
    cards: mapPlaylistToCards(playlist, cardsData)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistView);
