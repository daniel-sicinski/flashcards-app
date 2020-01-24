import {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  ACTIVATE_SELECT_STATE,
  DISABLE_SELECT_STATE,
  SELECT_CARD,
  UNSELECT_CARD,
  SET_DISPLAYED_CARDS,
  SET_SELECTED_CARDS,
  CLEAR_SELECTED_CARDS
} from "../../actions/cardsActions/actionNames";

const initialState = {
  cardsData: {},
  cardsDisplayed: [],
  selectedCardsIds: [],
  isSelectStateActive: false,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARDS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_CARDS_SUCCESS:
      return {
        ...state,
        cardsData: action.payload.cardsData,
        loading: false
      };
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case ACTIVATE_SELECT_STATE:
      return {
        ...state,
        isSelectStateActive: true
      };
    case DISABLE_SELECT_STATE:
      return {
        ...state,
        isSelectStateActive: false,
        selectedCardsIds: []
      };
    case SELECT_CARD:
      return {
        ...state,
        selectedCardsIds: [...state.selectedCardsIds, action.payload.cardId]
      };
    case UNSELECT_CARD:
      return {
        ...state,
        selectedCardsIds: state.selectedCardsIds.filter(
          id => id !== action.payload.cardId
        )
      };
    case SET_SELECTED_CARDS:
      return {
        ...state,
        selectedCardsIds: action.payload.selectedCardsIds
      };
    case CLEAR_SELECTED_CARDS:
      return {
        ...state,
        selectedCardsIds: []
      };
    case SET_DISPLAYED_CARDS:
      return {
        ...state,
        cardsDisplayed: action.payload.displayedCardsIds
      };
    default:
      return state;
  }
};
