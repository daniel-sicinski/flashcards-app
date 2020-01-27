import { connect } from "react-redux";
import AddEditPlaylistManager from "./AddEditPlaylistManager";
import {
  addPlaylist,
  updatePlaylist,
  disablePlaylistEditState
} from "../../store/actions/playlistsActions";

const mapStateToProps = state => {
  const editedPlaylistId = state.playlists.editedPlaylistId;

  return {
    selectedCardsIds: state.cards.selectedCardsIds,
    waitingForRequest: state.playlists.loading,
    editedPlaylist: state.playlists.playlistsData[editedPlaylistId]
  };
};

export default connect(mapStateToProps, {
  addPlaylist,
  updatePlaylist,
  disablePlaylistEditState
})(AddEditPlaylistManager);
