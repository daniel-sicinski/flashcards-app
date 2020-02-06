import {
  REGISTER_USER_START,
  REGISTER_USER_ERROR,
  LOG_IN_USER,
  LOG_OUT_USER,
  DISMISS_AUTH_ERROR
} from "../../actions/authActions/actionNames";

const initialState = {
  userName: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOG_IN_USER:
      return {
        ...state,
        userName: action.payload.userName,
        loading: false,
        error: null
      };
    case LOG_OUT_USER:
      return {
        ...state,
        userName: null
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    case DISMISS_AUTH_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
