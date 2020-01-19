import { connect } from "react-redux";
import Card from "./Card";
import {
  stopAudio,
  pauseTrack,
  setTracksToPlay,
  resumeTrack
} from "../../store/actions/audioActions";

const mapStateToProps = state => {
  return {
    isAudioPaused: state.audio.paused,
    currentlyActiveCardId: state.audio.currentlyActiveCardId,
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    loadingAudio: state.audio.loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const tracksToPlay = Object.values(ownProps.cardData.audioIds);

  return {
    onSettingTracksToPlay: () => dispatch(setTracksToPlay(tracksToPlay)),
    onPauseTrack: () => dispatch(pauseTrack()),
    onStopAudio: () => dispatch(stopAudio()),
    onResumeTrack: () => dispatch(resumeTrack())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
