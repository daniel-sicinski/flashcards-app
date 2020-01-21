import { connect } from "react-redux";
import { fetchPlaylists } from "../../store/actions/playlistsActions";
import { convertObjectToArray } from "./convertObjectToArray";
import Playlists from "./Playlists";

const mapStateToProps = state => {
  return {
    playlists: convertObjectToArray(state.playlists.playlistsData),
    loadingPlaylists: state.playlists.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: () => dispatch(fetchPlaylists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
