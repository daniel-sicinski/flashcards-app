import { call, put, takeEvery, getContext } from "redux-saga/effects";
import {
  logInUser,
  authRequestError,
  logOutUser
} from "../../actions/authActions";
import { postRequest, getRequest } from "../requests";
import {
  IS_USER_LOGGED_IN,
  REGISTER_USER_START,
  LOGIN_REQUEST_START,
  LOGOUT_REQUEST_START
} from "../../actions/authActions/actionNames";

function* getUserAuthStatus() {
  try {
    const response = yield call(fetch, "/api/v1/users/is-logged");

    if (response.status === 200) {
      const { userName } = yield response.json();
      yield put(logInUser(userName));

      yield localStorage.setItem("userName", userName);
    } else if (response.status === 401) {
      yield localStorage.removeItem("userName");

      const history = yield getContext("routerHistory");
      history.replace(`/register`);
    }
  } catch (error) {
    console.log("No connection error");
    console.log(error);

    const userName = yield localStorage.getItem("userName");

    if (userName) {
      yield put(logInUser(userName));
    } else {
      // offline and not logged in > redirect to dedicated offline page or standard /register?
    }
  }
}

function* authenticateUser(action) {
  const { authData, path } = action.payload;

  try {
    const { userName } = yield call(postRequest, path, authData);

    yield localStorage.setItem("userName", userName);

    yield put(logInUser(userName));

    const history = yield getContext("routerHistory");
    history.replace(`/`);
  } catch (error) {
    yield put(authRequestError(error.message));
  }
}

function* logoutUser() {
  try {
    yield call(getRequest, "/logout");

    yield localStorage.removeItem("userName");

    yield put(logOutUser());

    const history = yield getContext("routerHistory");
    history.replace(`/login`);
  } catch (error) {
    yield put(authRequestError(error.message));
  }
}

export default function* watchAuthSaga() {
  yield takeEvery(IS_USER_LOGGED_IN, getUserAuthStatus);
  yield takeEvery(REGISTER_USER_START, authenticateUser);
  yield takeEvery(LOGIN_REQUEST_START, authenticateUser);
  yield takeEvery(LOGOUT_REQUEST_START, logoutUser);
}
