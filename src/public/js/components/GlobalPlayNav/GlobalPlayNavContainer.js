import { connect } from "react-redux";
import GlobalPlayNav from "./GlobalPlayNav";
import { setTracksToPlay } from "../../store/actions/audioActions";
import mapCardsIdsToTrackNames from "./mapCardsIdsToTrackNames";

function mapStateToProps(state) {
  return {
    cardsData: state.cards.cardsData,
    cardsDisplayed: state.cards.cardsDisplayed,
    selectedCardsIds: state.cards.selectedCardsIds
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mapCardsIdsToTrackNamesWithDispatch: mapCardsIdsToTrackNames(dispatch)
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { cardsData, cardsDisplayed, selectedCardsIds } = stateProps;

  const cardIdsToPlay =
    selectedCardsIds.length === 0 ? cardsDisplayed : selectedCardsIds;
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    playSelectedTracks: dispatchProps.mapCardsIdsToTrackNamesWithDispatch(
      cardsData,
      cardIdsToPlay,
      setTracksToPlay
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GlobalPlayNav);
