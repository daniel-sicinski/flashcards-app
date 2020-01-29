import React from "react";
import NavOption from "../../../NavOption/NavOption";

export default function SelectCardsControl({
  isSelectStateActive,
  activateSelectState,
  disableSelectState
}) {
  return (
    <>
      {isSelectStateActive ? (
        <NavOption onClickCb={disableSelectState}>
          Zakończ zaznaczanie
        </NavOption>
      ) : (
        <NavOption onClickCb={activateSelectState}>Zaznacz kilka</NavOption>
      )}
    </>
  );
}
