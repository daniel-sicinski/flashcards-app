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
          className="toolbar__nav-icon"
          onClick={() => setSearchbarPopupVisibility(true)}
        />
      </ButtonFab>
      {isSelectStateActive ? (
        <ButtonFab>
          <HighlightOffIcon
            className="toolbar__nav-icon"
            onClick={disableSelectState}
          />
        </ButtonFab>
      ) : (
        <ButtonFab>
          <AddCircleOutlineIcon
            className="toolbar__nav-icon"
            onClick={activateSelectState}
          />
        </ButtonFab>
      )}
      <ButtonFab>
        <PlayCircleFilledIcon
          className="toolbar__nav-icon"
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
        style={{ width: "100%", right: "-100%", padding: "1rem 3rem" }}
      >
        <Searchbar formSubmitted={() => setSearchbarPopupVisibility(false)} />
      </MobilePopupNav>
    </>
  );
}
