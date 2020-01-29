import { connect } from "react-redux";
import AllCardsView from "./AllCardsView";
import {
  setDisplayedCards,
  disableSelectState
} from "../../store/actions/cardsActions";

const mapStateToProps = state => {
  const { cardsData } = state.cards;

  return {
    cards: Object.values(cardsData),
    loadingCards: state.cards.loading,
    cardsIds: Object.keys(cardsData)
  };
};

export default connect(mapStateToProps, {
  setDisplayedCards,
  disableSelectState
})(AllCardsView);
