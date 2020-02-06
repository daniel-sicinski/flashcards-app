import {
  IS_USER_LOGGED_IN,
  REGISTER_USER_START,
  REGISTER_USER_ERROR,
  LOG_IN_USER,
  LOG_OUT_USER,
  DISMISS_AUTH_ERROR
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
      userName,
      password
    }
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

export const registerUserError = error => {
  return {
    type: REGISTER_USER_ERROR,
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
