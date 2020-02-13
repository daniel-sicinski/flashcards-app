import { connect } from "react-redux";
import FlashcardsSelectView from "./FlashcardsSelectView";
import { fetchPlaylists } from "../../store/actions/playlistsActions";
import { convertObjectToArray } from "../../utils/convertObjectToArray";

const mapStateToProps = state => {
  return {
    playlists: convertObjectToArray(state.playlists.playlistsData),
    isDesktop: state.ui.isDesktop
  };
};

export default connect(mapStateToProps, { fetchPlaylists })(
  FlashcardsSelectView
);
