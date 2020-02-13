import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import GlobalPlayNav from "../../GlobalPlayNav/GlobalPlayNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";
import ButtonFab from "../../ButtonFab/ButtonFab";
import Searchbar from "../../Searchbar/Searchbar";

export default function HomePageControls({
  activateSelectState,
  disableSelectState,
  isSelectStateActive,
  handleOnGlobalPlayClick,
  isAudioPopupShown,
  setAudioPopupVisibility,
  isSearchbarPopupShown,
  setSearchbarPopupVisibility
}) {
  return (
    <>
      <ButtonFab>
        <SearchIcon
          className="mobile-icon"
          onClick={() => setSearchbarPopupVisibility(true)}
        />
      </ButtonFab>
      {isSelectStateActive ? (
        <ButtonFab>
          <HighlightOffIcon
            className="mobile-icon"
            onClick={disableSelectState}
          />
        </ButtonFab>
      ) : (
        <ButtonFab>
          <AddCircleOutlineIcon
            className="mobile-icon"
            onClick={activateSelectState}
          />
        </ButtonFab>
      )}
      <ButtonFab>
        <PlayCircleFilledIcon
          className="mobile-icon"
          onClick={handleOnGlobalPlayClick}
        />
      </ButtonFab>

      <MobilePopupNav
        isPopupShown={isAudioPopupShown}
        hidePopup={() => setAudioPopupVisibility(false)}
      >
        <GlobalPlayNav />
      </MobilePopupNav>
      <MobilePopupNav
        isPopupShown={isSearchbarPopupShown}
        style={{ width: "100%", right: "-100%" }}
      >
        <Searchbar formSubmitted={() => setSearchbarPopupVisibility(false)} />
      </MobilePopupNav>
    </>
  );
}
