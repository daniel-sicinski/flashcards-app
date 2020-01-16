import React, { Component } from "react";
import Card from "../../components/Card";
import { connect } from "react-redux";
import {
  stopAudio,
  pauseTrack,
  setTracksToPlay,
  resumeTrack
} from "../../store/actions/audioActions";

class Cards extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    fetch("/api/v1/cards")
      .then(res => res.json())
      .then(res => {
        this.setState({
          cards: res.data.cards
        });
        console.log(res.data.cards);
      })
      .catch(e => console.log(e));
  }

  isActive = cardId => {
    return cardId === this.props.currentlyActiveCardId;
  };

  renderCards() {
    return this.state.cards.map(card => {
      const { _id } = card;

      return (
        <Card
          cardData={card}
          key={_id}
          onSettingTracksToPlay={this.handleSettingTracksToPlay}
          onPauseTrack={this.handlePauseTrack}
          onStopAudio={this.handleStopAudio}
          onResumeTrack={this.handleResumeTrack}
          isActive={this.isActive(_id)}
          paused={this.props.paused}
          loadingAudio={this.props.loadingAudio}
        />
      );
    });
  }

  handleSettingTracksToPlay = tracksToPlay => {
    this.props.setTracksToPlay(tracksToPlay);
  };

  handlePauseTrack = () => {
    this.props.pauseTrack();
  };

  handleResumeTrack = () => {
    this.props.resumeTrack();
  };

  handleStopAudio = () => {
    this.props.stopAudio();
  };

  render() {
    return <div className="cards">{this.renderCards()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    currentlyActiveCardId: state.audio.currentlyActiveCardId,
    paused: state.audio.paused,
    loadingAudio: state.audio.loading
  };
};

export default connect(mapStateToProps, {
  stopAudio,
  pauseTrack,
  setTracksToPlay,
  resumeTrack
})(Cards);
