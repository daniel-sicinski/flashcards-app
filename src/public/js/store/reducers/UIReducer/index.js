import {
  SET_DEVICE_TYPE,
  SET_DEFERRED_PROMPT,
  CLEAR_DEFERRED_PROMPT,
  INVERT_SLIDES
} from "../../actions/UIActions/actionNames";

const initialState = {
  isDesktop: false,
  invertedSlides: false,
  PWAInstallDeferredPrompt: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return {
        ...state,
        isDesktop: action.payload.isDesktop
      };
    case INVERT_SLIDES:
      return {
        ...state,
        invertedSlides: !state.invertedSlides
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
