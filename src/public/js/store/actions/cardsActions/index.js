import {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR
} from "./actionNames";

export const fetchCardsStart = () => {
  return {
    type: FETCH_CARDS_START
  };
};

export const fetchCardsSuccess = cardsData => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: {
      cardsData
    }
  };
};

export const fetchCardsError = () => {
  return {
    type: FETCH_CARDS_ERROR
  };
};
