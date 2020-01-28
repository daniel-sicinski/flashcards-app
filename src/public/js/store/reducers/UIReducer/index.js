import { SET_DEVICE_TYPE } from "../../actions/UIActions/actionNames";

const initialState = {
  isDesktop: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DEVICE_TYPE:
      return {
        ...state,
        isDesktop: action.payload.isDesktop
      };
    default:
      return state;
  }
};
