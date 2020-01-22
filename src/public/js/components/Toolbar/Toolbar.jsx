import React, { useState } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import GlobalPlayNav from "../GlobalPlayNav/GlobalPlayNavContainer";
import Backdrop from "../Backdrop";
import AudioControls from "../AudioControls/AudioControlsContainer";
import MobilePopupNav from "../MobilePopupNav/MobilePopupNav";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlaylistNav from "../PlaylistsNav/PlaylistNavContainer";

export default function Toolbar({
  isGlobalAudioPlay,
  isSelectStateActive,
  activateSelectState,
  disableSelectState,
  isNoCardsSelected,
  showSideNav,
  history
}) {
  const [isPopupShown, setPopupVisibility] = useState(false);
  console.log(history.location.pathname);

  const handleOnGlobalPlayClick = () => {
    setPopupVisibility(true);

    if (isSelectStateActive && isNoCardsSelected) disableSelectState();
  };

  const renderHomePageIcons = () => (
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
        isPopupShown={isPopupShown}
        hidePopup={() => setPopupVisibility(false)}
      >
        <GlobalPlayNav />
      </MobilePopupNav>
    </>
  );

  const renderPlaylistsIcons = () => (
    <div>
      <PlaylistAddCheckIcon
        className="toolbar__nav-icon"
        onClick={() => setPopupVisibility(true)}
      />
      <MobilePopupNav
        isPopupShown={isPopupShown}
        hidePopup={() => setPopupVisibility(false)}
      >
        <PlaylistNav />
      </MobilePopupNav>
    </div>
  );

  const renderIconsBasedOnPath = () => {
    switch (history.location.pathname) {
      case "/":
        return renderHomePageIcons();
      case "/playlists":
        return renderPlaylistsIcons();
      default:
        return null;
    }
  };

  return (
    <div className="toolbar">
      {isGlobalAudioPlay ? (
        <AudioControls />
      ) : (
        <div className="toolbar__nav">
          <MenuIcon className="toolbar__nav-icon" onClick={showSideNav} />
          {renderIconsBasedOnPath()}
        </div>
      )}
      <Backdrop
        show={isPopupShown}
        hideOnClick={() => setPopupVisibility(false)}
      />
    </div>
  );
}
