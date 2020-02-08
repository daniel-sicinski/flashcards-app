import {
  SET_DEVICE_TYPE,
  CLEAR_DEFERRED_PROMPT,
  SET_DEFERRED_PROMPT
} from "./actionNames";

export const setDeviceType = isDesktop => {
  return {
    type: SET_DEVICE_TYPE,
    payload: {
      isDesktop
    }
  };
};

export const setDeferredPrompt = deferredPrompt => {
  return {
    type: SET_DEFERRED_PROMPT,
    payload: {
      deferredPrompt
    }
  };
};

export const clearDeferredPrompt = isDesktop => {
  return {
    type: CLEAR_DEFERRED_PROMPT
  };
};
