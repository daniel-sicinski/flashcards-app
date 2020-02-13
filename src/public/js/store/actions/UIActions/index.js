import {
  SET_DEVICE_TYPE,
  CLEAR_DEFERRED_PROMPT,
  SET_DEFERRED_PROMPT,
  CLEAR_ERROR_MESSAGE,
  INVERT_SLIDES
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

export const clearErrorMessage = () => {
  return {
    type: CLEAR_ERROR_MESSAGE
  };
};

export const invertSlides = () => {
  return {
    type: INVERT_SLIDES
  };
};
