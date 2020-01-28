import { connect } from "react-redux";
import RenderCards from "./RenderCards";

const mapStateToProps = state => {
  return {
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    currentlyActiveCardId: state.audio.currentlyActiveCardId,
    isDesktop: state.ui.isDesktop
  };
};

export default connect(mapStateToProps)(RenderCards);
