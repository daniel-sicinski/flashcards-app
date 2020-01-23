import { connect } from "react-redux";
import { fetchPlaylists } from "../../store/actions/playlistsActions";
import { convertObjectToArray } from "./convertObjectToArray";
import { disableSelectPlaylistState } from "../../store/actions/playlistsActions";
import Playlists from "./Playlists";

const mapStateToProps = state => {
  return {
    playlists: convertObjectToArray(state.playlists.playlistsData),
    loadingPlaylists: state.playlists.loading,
    isSelectPlaylistState: state.playlists.selectPlaylistState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists()),
    disableSelectPlaylistState: () => dispatch(disableSelectPlaylistState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
