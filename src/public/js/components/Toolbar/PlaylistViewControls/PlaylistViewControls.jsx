import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import PlaylistNav from "../../PlaylistsNav/PlaylistNavContainer";
import GlobalPlayNav from "../../GlobalPlayNav/GlobalPlayNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";

export default function PlaylistViewControls({
  isPlaylistPopupShown,
  setPlaylistPopupVisibility,
  isAudioPopupShown,
  setAudioPopupVisibility,
  handleOnGlobalPlayClick
}) {
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
}
