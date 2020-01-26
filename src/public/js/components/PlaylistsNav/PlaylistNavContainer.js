import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PlaylistNav from "./PlaylistsNav";
import {
  activateSelectPlaylistEditState,
  activateSelectPlaylistDeleteState
} from "../../store/actions/playlistsActions";

const withStore = connect(null, {
  activateSelectPlaylistEditState,
  activateSelectPlaylistDeleteState
});

export default compose(withStore, withRouter)(PlaylistNav);
