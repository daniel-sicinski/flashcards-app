import { connect } from "react-redux";
import AudioControls from "./AudioControls";
import {
  pauseTrack,
  resumeTrack,
  stopAudio
} from "../../store/actions/audioActions";

const mapStateToProps = state => {
  return {
    isAudioPaused: state.audio.paused
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSkipPrevious: () => {},
    onSkipNext: () => {},
    onPause: () => dispatch(pauseTrack()),
    onResume: () => dispatch(resumeTrack()),
    onStop: () => dispatch(stopAudio())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioControls);
