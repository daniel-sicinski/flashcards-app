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
import PlaylistAddEdit from "../PlaylistAddEdit/PlaylistAddEditContainer";

import { Route } from "react-router-dom";

export default function Toolbar({
  isGlobalAudioPlay,
  isSelectStateActive,
  activateSelectState,
  disableSelectState,
  isNoCardsSelected,
  showSideNav,
  history
}) {
  const [isAudioPopupShown, setAudioPopupVisibility] = useState(false);
  const [isPlaylistPopupShown, setPlaylistPopupVisibility] = useState(false);

  const handleOnGlobalPlayClick = () => {
    setAudioPopupVisibility(true);

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
        isPopupShown={isAudioPopupShown}
        hidePopup={() => setAudioPopupVisibility(false)}
      >
        <GlobalPlayNav />
      </MobilePopupNav>
    </>
  );

  const renderPlaylistsIcons = () => (
    <div>
      <PlaylistAddCheckIcon
        className="toolbar__nav-icon"
        onClick={() => setPlaylistPopupVisibility(true)}
      />
      <MobilePopupNav
        isPopupShown={isPlaylistPopupShown}
        hidePopup={() => setPlaylistPopupVisibility(false)}
      >
        <PlaylistNav />
      </MobilePopupNav>
    </div>
  );

  const PlaylistViewIcons = () => {
    return (
      <>
        <SearchIcon className="toolbar__nav-icon" />
        <PlaylistAddCheckIcon
          className="toolbar__nav-icon"
          onClick={() => setPlaylistPopupVisibility(true)}
        />
        <MobilePopupNav
          isPopupShown={isPlaylistPopupShown}
          hidePopup={() => setPlaylistPopupVisibility(false)}
        >
          <PlaylistNav />
        </MobilePopupNav>
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
  };

  const renderIconsBasedOnPath = () => {
    const { pathname } = history.location;
    switch (pathname) {
      case "/":
        return renderHomePageIcons();
      case "/playlists":
        return renderPlaylistsIcons();
      case "/playlists/new":
        return <PlaylistAddEdit />;
      case /^\/playlists\/edit/.test(pathname) && pathname:
        return <PlaylistAddEdit />;
      // case /^\/playlists\/.+$/.test(pathname) && pathname:
      //   return <PlaylistViewIcons />;
      default:
        return null;
    }
  };

  const hidePopups = () => {
    setAudioPopupVisibility(false);
    setPlaylistPopupVisibility(false);
  };

  return (
    <div className="toolbar">
      {isGlobalAudioPlay ? (
        <AudioControls />
      ) : (
        <div className="toolbar__nav">
          <MenuIcon className="toolbar__nav-icon" onClick={showSideNav} />
          {renderIconsBasedOnPath()}
          <Route path="/playlists/:playlistId" component={PlaylistViewIcons} />
        </div>
      )}
      <Backdrop
        show={isAudioPopupShown || isPlaylistPopupShown}
        hideOnClick={hidePopups}
      />
    </div>
  );
}
