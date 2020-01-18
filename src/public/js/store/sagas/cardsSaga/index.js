import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_CARDS_START } from "../../actions/cardsActions/actionNames";
import { fetchCardsSuccess, fetchCardsError } from "../../actions/cardsActions";
import { cardsRequest } from "../utils";

export function* getCards() {
  try {
    const cardsData = yield call(cardsRequest);

    yield put(fetchCardsSuccess(cardsData));
  } catch (e) {
    yield put(fetchCardsError(e));
  }
}

export default function* watchCardsSaga() {
  yield takeEvery(FETCH_CARDS_START, getCards);
}
