import {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_ERROR,
  ACTIVATE_SELECT_STATE,
  DISABLE_SELECT_STATE,
  SELECT_CARD,
  UNSELECT_CARD,
  SET_DISPLAYED_CARDS
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

export const activateSelectState = () => {
  return {
    type: ACTIVATE_SELECT_STATE
  };
};

export const disableSelectState = () => {
  return {
    type: DISABLE_SELECT_STATE
  };
};

export const selectCard = cardId => {
  return {
    type: SELECT_CARD,
    payload: {
      cardId
    }
  };
};

export const unselectCard = cardId => {
  return {
    type: UNSELECT_CARD,
    payload: {
      cardId
    }
  };
};

export const setDisplayedCards = displayedCardsIds => {
  return {
    type: SET_DISPLAYED_CARDS,
    payload: {
      displayedCardsIds
    }
  };
};
