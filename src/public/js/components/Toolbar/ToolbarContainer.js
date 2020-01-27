import { connect } from "react-redux";
// import { compose } from "redux";
import Toolbar from "./Toolbar";
import {
  activateSelectState,
  disableSelectState
} from "../../store/actions/cardsActions";
// import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    isSelectStateActive: state.cards.isSelectStateActive,
    isNoCardsSelected: state.cards.selectedCardsIds.length === 0
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     activateSelectState: () => dispatch(activateSelectState()),
//     disableSelectState: () => dispatch(disableSelectState())
//   };
// };

// const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default connect(mapStateToProps, {
  activateSelectState,
  disableSelectState
})(Toolbar);

// export default compose(withRedux, withRouter)(Toolbar);
