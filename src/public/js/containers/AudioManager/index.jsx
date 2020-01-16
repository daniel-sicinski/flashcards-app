import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import {
  loadTrack,
  trackFinished,
  stopAudio,
  gapFinished
} from "../../store/actions/audioActions";

class AudioManager extends Component {
  constructor(props) {
    super(props);
    this.audioElement = createRef();
  }

  componentDidUpdate(prevProps) {
    this.onTracksToPlayUpdate(prevProps);
    this.onPausedUpdate(prevProps);
  }

  onTracksToPlayUpdate = prevProps => {
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
  };

  onPausedUpdate = prevProps => {
    const { paused: prevPaused } = prevProps;
    const { paused, currentlyPlayedTrackRef } = this.props;

    if (prevPaused !== paused) {
      const audio = this.audioElement.current;

      if (paused && currentlyPlayedTrackRef) {
        audio.pause();
      } else if (currentlyPlayedTrackRef) {
        audio.play();
      }
    }
  };

  render() {
    return (
      <audio
        ref={this.audioElement}
        autoPlay
        src={this.props.currentlyPlayedTrackRef || ""}
        onEnded={this.props.trackFinished}
      ></audio>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentlyPlayedTrackRef: state.audio.currentlyPlayedTrackRef,
    tracksToPlay: state.audio.tracksToPlay,
    playbackGap: state.audio.playbackGap,
    paused: state.audio.paused
  };
};

export default connect(mapStateToProps, {
  loadTrack,
  trackFinished,
  stopAudio,
  gapFinished
})(AudioManager);
