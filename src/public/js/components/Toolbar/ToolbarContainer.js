import { connect } from "react-redux";
import Toolbar from "./Toolbar";

const mapStateToProps = state => {
  return {
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay
  };
};

export default connect(mapStateToProps)(Toolbar);
