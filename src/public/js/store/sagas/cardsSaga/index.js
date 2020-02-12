import localforage from "localforage";
import IndexedDBService from "../IndexedDBService";
import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_CARDS_START } from "../../actions/cardsActions/actionNames";
import {
  fetchCardsSuccess,
  fetchCardsError,
  setDisplayedCards
} from "../../actions/cardsActions";
import { mapArrayToObjectByIds } from "../utils";
import { getRequest } from "../requests";

const dbService = new IndexedDBService(localforage);

export function* getCards() {
  let cardsData;
  try {
    cardsData = yield call(dbService.getData, "cardsData");

    if (!cardsData) {
      const responseJson = yield call(getRequest, "/cards");
      cardsData = responseJson.data.cards;
      yield call(dbService.saveData, "cardsData", cardsData);
    }

    const cardsDataObject = mapArrayToObjectByIds(cardsData, "_id");

    yield put(fetchCardsSuccess(cardsDataObject));
  } catch (e) {
    yield put(fetchCardsError(e));
  }
}

export default function* watchCardsSaga() {
  yield takeEvery(FETCH_CARDS_START, getCards);
}
