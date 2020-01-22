import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PlaylistNav from "./PlaylistsNav";
import { activateSelectState } from "../../store/actions/cardsActions";

const mapDispatchToProps = dispatch => {
  return {
    activateSelectState: () => dispatch(activateSelectState())
  };
};

const withStore = connect(null, mapDispatchToProps);

export default compose(withStore, withRouter)(PlaylistNav);
