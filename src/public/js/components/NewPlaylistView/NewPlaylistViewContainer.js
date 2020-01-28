import { connect } from "react-redux";
import NewPlaylistView from "./NewPlaylistView";
import {
  activateSelectState,
  disableSelectState
} from "../../store/actions/cardsActions";

const mapStateToProps = state => {
  const { cardsData } = state.cards;

  return {
    cards: Object.values(cardsData),
    loadingCards: state.cards.loading
  };
};

export default connect(mapStateToProps, {
  activateSelectState,
  disableSelectState
})(NewPlaylistView);
