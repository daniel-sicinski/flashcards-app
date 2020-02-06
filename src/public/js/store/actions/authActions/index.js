import {
  IS_USER_LOGGED_IN,
  REGISTER_USER_START,
  AUTH_REQUEST_ERROR,
  LOG_IN_USER,
  LOG_OUT_USER,
  DISMISS_AUTH_ERROR,
  LOGOUT_REQUEST_START,
  LOGIN_REQUEST_START
} from "./actionNames";

export const checkUserAuthStatus = () => {
  return {
    type: IS_USER_LOGGED_IN
  };
};

export const registerUserStart = (userName, password) => {
  return {
    type: REGISTER_USER_START,
    payload: {
      path: "/users",
      authData: {
        userName,
        password
      }
    }
  };
};

export const loginRequestStart = (userName, password) => {
  return {
    type: LOGIN_REQUEST_START,
    payload: {
      path: "/login",
      authData: {
        userName,
        password
      }
    }
  };
};

export const logoutRequestStart = () => {
  return {
    type: LOGOUT_REQUEST_START
  };
};

export const logInUser = userName => {
  return {
    type: LOG_IN_USER,
    payload: {
      userName
    }
  };
};

export const logOutUser = () => {
  return {
    type: LOG_OUT_USER
  };
};

export const authRequestError = error => {
  return {
    type: AUTH_REQUEST_ERROR,
    payload: {
      error
    }
  };
};

export const dismissAuthError = () => {
  return {
    type: DISMISS_AUTH_ERROR
  };
};
