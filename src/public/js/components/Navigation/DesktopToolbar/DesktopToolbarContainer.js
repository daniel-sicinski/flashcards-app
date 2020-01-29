import { connect } from "react-redux";
import DesktopToolbar from "./DesktopToolbar";
import {
  activateSelectState,
  disableSelectState
} from "../../../store/actions/cardsActions";

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
})(DesktopToolbar);
