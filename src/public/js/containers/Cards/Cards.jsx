import React, { Component } from "react";
import Card from "../../components/Card";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  stopAudio,
  pauseTrack,
  setTracksToPlay,
  resumeTrack
} from "../../store/actions/audioActions";

class Cards extends Component {
  isActive = cardId => {
    return cardId === this.props.currentlyActiveCardId;
  };

  renderCards() {
    return this.props.cardsToDisplay.map(card => {
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
          isGlobalAudioPlay={this.props.isGlobalAudioPlay}
        />
      );
    });
  }

  renderSpinner = () => (
    <div className="cards-spinner-box">
      <CircularProgress style={{ color: "#d3b06a" }} />
    </div>
  );

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
    return (
      <div className="cards">
        {this.props.loadingCards ? this.renderSpinner() : this.renderCards()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cardsData, cardsDisplayed } = state.cards;
  return {
    currentlyActiveCardId: state.audio.currentlyActiveCardId,
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    paused: state.audio.paused,
    loadingAudio: state.audio.loading,
    loadingCards: state.cards.loading,
    // temporary
    cardsToDisplay: convertCardsIdsToCards(cardsDisplayed, cardsData)
  };
};

function convertCardsIdsToCards(cardsIds, cardsData) {
  return cardsIds.map(id => cardsData[id]);
}

export default connect(mapStateToProps, {
  stopAudio,
  pauseTrack,
  setTracksToPlay,
  resumeTrack
})(Cards);
