import React, { Component } from "react";
import Card from "../../components/Card";
import { connect } from "react-redux";
import {
  stopAudio,
  pauseTrack,
  setTracksToPlay
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

  handleStopAudio = () => {
    this.props.stopAudio();
  };

  render() {
    return <div className="cards">{this.renderCards()}</div>;
  }
}

export default connect(null, { stopAudio, pauseTrack, setTracksToPlay })(Cards);
