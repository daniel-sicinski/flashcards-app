import { connect } from "react-redux";
import { fetchPlaylists } from "../../store/actions/playlistsActions";
import { convertObjectToArray } from "./convertObjectToArray";
import {
  disableSelectPlaylistState,
  deletePlaylist
} from "../../store/actions/playlistsActions";
import Playlists from "./Playlists";

const mapStateToProps = state => {
  return {
    playlists: convertObjectToArray(state.playlists.playlistsData),
    loadingPlaylists: state.playlists.loading,
    isSelectPlaylistEditState: state.playlists.selectPlaylistEditState,
    isSelectPlaylistDeleteState: state.playlists.selectPlaylistDeleteState
  };
};

export default connect(mapStateToProps, {
  fetchPlaylists,
  disableSelectPlaylistState,
  deletePlaylist
})(Playlists);
