import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import GlobalPlayNav from "../../GlobalPlayNav/GlobalPlayNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";

export default function HomePageControls({
  activateSelectState,
  disableSelectState,
  isSelectStateActive,
  handleOnGlobalPlayClick,
  isAudioPopupShown,
  setAudioPopupVisibility
}) {
  return (
    <>
      <SearchIcon className="toolbar__nav-icon" />
      {isSelectStateActive ? (
        <HighlightOffIcon
          className="toolbar__nav-icon"
          onClick={disableSelectState}
        />
      ) : (
        <AddCircleOutlineIcon
          className="toolbar__nav-icon"
          onClick={activateSelectState}
        />
      )}

      <PlayCircleFilledIcon
        className="toolbar__nav-icon"
        onClick={handleOnGlobalPlayClick}
      />
      <MobilePopupNav
        isPopupShown={isAudioPopupShown}
        hidePopup={() => setAudioPopupVisibility(false)}
      >
        <GlobalPlayNav />
      </MobilePopupNav>
    </>
  );
}
