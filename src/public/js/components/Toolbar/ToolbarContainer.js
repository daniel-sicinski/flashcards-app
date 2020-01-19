import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import {
  activateSelectState,
  disableSelectState
} from "../../store/actions/cardsActions";

const mapStateToProps = state => {
  return {
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    isSelectStateActive: state.cards.isSelectStateActive,
    isNoCardsSelected: state.cards.selectedCardsIds.length === 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    activateSelectState: () => dispatch(activateSelectState()),
    disableSelectState: () => dispatch(disableSelectState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
