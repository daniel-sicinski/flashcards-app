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
import User from "../../reducers/authReducer/User";

function* getUserAuthStatus() {
  try {
    const response = yield call(fetch, "/api/v1/users/is-logged");

    if (response.status === 200) {
      const { userName, userId } = yield response.json();
      const user = new User(userName, userId);
      yield put(logInUser(user));

      yield localStorage.setItem("user", JSON.stringify(user));
    } else if (response.status === 401) {
      yield localStorage.removeItem("user");

      const history = yield getContext("routerHistory");
      history.replace(`/register`);
    }
  } catch (error) {
    const user = yield localStorage.getItem("user");

    if (user) {
      yield put(logInUser(JSON.parse(user)));
    } else {
      const history = yield getContext("routerHistory");
      history.replace(`/offline`);
    }
  }
}

function* authenticateUser(action) {
  const { authData, path } = action.payload;

  try {
    const user = yield call(postRequest, path, authData);

    yield localStorage.setItem("user", JSON.stringify(user));

    yield put(logInUser(user));

    const history = yield getContext("routerHistory");
    history.replace(`/`);
  } catch (error) {
    yield put(authRequestError(error.message));
  }
}

function* logoutUser() {
  try {
    yield call(getRequest, "/logout");

    yield localStorage.removeItem("user");

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
