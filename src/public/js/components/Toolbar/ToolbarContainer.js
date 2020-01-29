import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import { activateSelectState } from "../../store/actions/cardsActions";

const mapStateToProps = state => {
  return {
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    isSelectStateActive: state.cards.isSelectStateActive
  };
};

export default connect(mapStateToProps, {
  activateSelectState
})(Toolbar);
