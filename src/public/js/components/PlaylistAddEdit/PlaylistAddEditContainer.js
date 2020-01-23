import { connect } from "react-redux";
import PlaylistAddEdit from "./PlaylistAddEdit";
import { disableSelectState } from "../../store/actions/cardsActions";
import { addPlaylist } from "../../store/actions/playlistsActions";
import { handleAddPlaylistDispatch } from "./handleAddPlaylistDispatch";

const mapStateToProps = state => {
  return {
    selectedCardsIds: state.cards.selectedCardsIds,
    waitingForRequest: state.playlists.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    disableSelectState: () => dispatch(disableSelectState()),
    addPlaylistWithDispatch: handleAddPlaylistDispatch(dispatch, addPlaylist)
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    addPlaylist: dispatchProps.addPlaylistWithDispatch(
      stateProps.selectedCardsIds
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PlaylistAddEdit);
