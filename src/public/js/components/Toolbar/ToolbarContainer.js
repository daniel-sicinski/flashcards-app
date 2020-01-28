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

export default connect(mapStateToProps, {
  activateSelectState,
  disableSelectState
})(Toolbar);
