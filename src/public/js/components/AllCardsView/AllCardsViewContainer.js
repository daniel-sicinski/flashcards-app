import { connect } from "react-redux";
import { createSelector } from "reselect";
import AllCardsView from "./AllCardsView";
import {
  setDisplayedCards,
  disableSelectState
} from "../../store/actions/cardsActions";
import { filterCards } from "../../utils/filterCards";
import { getQueryParams } from "../../utils/getQueryParams";

const getCardsData = state => state.cards.cardsData;

const getCardsArray = createSelector([getCardsData], cardsData =>
  Object.values(cardsData)
);

const getSearchWord = (state, ownProps) => {
  const params = getQueryParams(ownProps.location.search);
  return params.s;
};

const getFilteredCardsSelector = createSelector(
  [getCardsArray, getSearchWord],
  filterCards
);

const getCardsIdsSelector = createSelector(
  [getFilteredCardsSelector],
  filteredCards => filteredCards.map(card => card._id)
);

const mapStateToProps = (state, ownProps) => {
  return {
    cards: getFilteredCardsSelector(state, ownProps),
    loadingCards: state.cards.loading,
    cardsIds: getCardsIdsSelector(state, ownProps)
  };
};

export default connect(mapStateToProps, {
  setDisplayedCards,
  disableSelectState
})(AllCardsView);
