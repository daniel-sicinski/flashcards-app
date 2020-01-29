import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import PlaylistNav from "../../PlaylistsNav/PlaylistNavContainer";
import GlobalPlayNav from "../../GlobalPlayNav/GlobalPlayNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";
import ButtonFab from "../../ButtonFab/ButtonFab";

export default function PlaylistViewControls({
  isPlaylistPopupShown,
  setPlaylistPopupVisibility,
  isAudioPopupShown,
  setAudioPopupVisibility,
  handleOnGlobalPlayClick
}) {
  return (
    <>
      <ButtonFab>
        <SearchIcon className="toolbar__nav-icon" />
      </ButtonFab>
      <ButtonFab>
        <PlaylistAddCheckIcon
          className="toolbar__nav-icon"
          onClick={() => setPlaylistPopupVisibility(true)}
        />
      </ButtonFab>

      <MobilePopupNav
        isPopupShown={isPlaylistPopupShown}
        hidePopup={() => setPlaylistPopupVisibility(false)}
      >
        <PlaylistNav />
      </MobilePopupNav>
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
    </>
  );
}
