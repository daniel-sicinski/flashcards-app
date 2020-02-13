import React from "react";
import NavOption from "../NavOption/NavOption";
import ButtonFab from "../ButtonFab/ButtonFab";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";

export default function FlashcardsToolbar({ isDesktop, invertSlides }) {
  return (
    <>
      {isDesktop ? (
        <NavOption onClickCb={invertSlides}>Odwróć slajdy</NavOption>
      ) : (
        <ButtonFab>
          <CompareArrowsIcon className="mobile-icon" onClick={invertSlides} />
        </ButtonFab>
      )}
    </>
  );
}
