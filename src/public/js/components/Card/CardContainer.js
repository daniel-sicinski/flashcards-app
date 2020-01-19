import { connect } from "react-redux";
import Card from "./Card";
import {
  stopAudio,
  pauseTrack,
  setTracksToPlay,
  resumeTrack
} from "../../store/actions/audioActions";
import { selectCard, unselectCard } from "../../store/actions/cardsActions";

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps;
  return {
    isAudioPaused: state.audio.paused,
    isActive: cardId === state.audio.currentlyActiveCardId,
    isGlobalAudioPlay: state.audio.isGlobalAudioPlay,
    loadingAudio: state.audio.loading,
    isSelectStateActive: state.cards.isSelectStateActive,
    isCardSelected: state.cards.selectedCardsIds.includes(cardId)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const tracksToPlay = Object.values(ownProps.cardData.audioIds);

  return {
    onSettingTracksToPlay: () => dispatch(setTracksToPlay(tracksToPlay)),
    onPauseTrack: () => dispatch(pauseTrack()),
    onStopAudio: () => dispatch(stopAudio()),
    onResumeTrack: () => dispatch(resumeTrack()),
    onSelectCard: cardId => dispatch(selectCard(cardId)),
    onUnselectCard: cardId => dispatch(unselectCard(cardId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
