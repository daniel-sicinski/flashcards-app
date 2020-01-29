import { SET_DEVICE_TYPE } from "./actionNames";

export const setDeviceType = isDesktop => {
  console.log("dispatching device type");
  return {
    type: SET_DEVICE_TYPE,
    payload: {
      isDesktop
    }
  };
};
