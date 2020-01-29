import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_CARDS_START } from "../../actions/cardsActions/actionNames";
import {
  fetchCardsSuccess,
  fetchCardsError,
  setDisplayedCards
} from "../../actions/cardsActions";
import { mapArrayToObjectByIds } from "../utils";
import { getRequest } from "../requests";

export function* getCards() {
  try {
    const cardsData = yield call(getRequest, "/cards");

    const cardsDataObject = mapArrayToObjectByIds(cardsData.data.cards, "_id");

    yield put(fetchCardsSuccess(cardsDataObject));
    yield put(setDisplayedCards(Object.keys(cardsDataObject)));
  } catch (e) {
    yield put(fetchCardsError(e));
  }
}

export default function* watchCardsSaga() {
  yield takeEvery(FETCH_CARDS_START, getCards);
}
