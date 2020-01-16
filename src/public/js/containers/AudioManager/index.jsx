import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadTrack,
  trackFinished,
  stopAudio
} from "../../store/actions/audioActions";

class AudioManager extends Component {
  componentDidUpdate(prevProps) {
    const { tracksToPlay: prevTracksToPlay } = prevProps;
    const { tracksToPlay, loadTrack, stopAudio } = this.props;

    if (prevTracksToPlay !== tracksToPlay) {
      const firstTrackId = tracksToPlay[0];

      if (firstTrackId) {
        loadTrack(firstTrackId);
      } else {
        stopAudio();
      }
    }
  }

  handleTrackEnd = () => {
    const { trackFinished, playbackGap } = this.props;
    setTimeout(trackFinished, playbackGap);
  };

  render() {
    return (
      <audio
        autoPlay
        src={this.props.currentlyPlayedTrackRef || ""}
        onEnded={this.handleTrackEnd}
      ></audio>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentlyPlayedTrackRef: state.audio.currentlyPlayedTrackRef,
    tracksToPlay: state.audio.tracksToPlay,
    playbackGap: state.audio.playbackGap
  };
};

export default connect(mapStateToProps, {
  loadTrack,
  trackFinished,
  stopAudio
})(AudioManager);
