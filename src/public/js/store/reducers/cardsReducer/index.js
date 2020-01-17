import {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR
} from "../../actions/cardsActions/actionNames";

const initialState = {
  cardsData: {},
  cardsDisplayed: [],
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
        cardsDisplayed: [...Object.keys(action.payload.cardsData)],
        loading: false
      };
    case FETCH_CARDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};
