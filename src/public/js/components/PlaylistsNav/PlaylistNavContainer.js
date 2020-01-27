import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PlaylistNav from "./PlaylistsNav";
import {
  activateSelectPlaylistEditState,
  activateSelectPlaylistDeleteState,
  deletePlaylist
} from "../../store/actions/playlistsActions";

const withStore = connect(null, {
  activateSelectPlaylistEditState,
  activateSelectPlaylistDeleteState,
  deletePlaylist
});

export default compose(withRouter, withStore)(PlaylistNav);
