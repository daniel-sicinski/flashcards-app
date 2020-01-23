import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PlaylistNav from "./PlaylistsNav";
import { activateSelectPlaylistState } from "../../store/actions/playlistsActions";

const mapDispatchToProps = dispatch => {
  return {
    activateSelectPlaylistState: () => dispatch(activateSelectPlaylistState())
  };
};

const withStore = connect(null, mapDispatchToProps);

export default compose(withStore, withRouter)(PlaylistNav);
