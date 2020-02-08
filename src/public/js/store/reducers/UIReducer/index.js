import {
  SET_DEVICE_TYPE,
  SET_DEFERRED_PROMPT,
  CLEAR_DEFERRED_PROMPT
} from "../../actions/UIActions/actionNames";

const initialState = {
  isDesktop: false,
  PWAInstallDeferredPrompt: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return {
        ...state,
        isDesktop: action.payload.isDesktop
      };
    case SET_DEFERRED_PROMPT:
      return {
        ...state,
        PWAInstallDeferredPrompt: action.payload.deferredPrompt
      };
    case CLEAR_DEFERRED_PROMPT:
      return {
        ...state,
        PWAInstallDeferredPrompt: null
      };
    default:
      return state;
  }
};
