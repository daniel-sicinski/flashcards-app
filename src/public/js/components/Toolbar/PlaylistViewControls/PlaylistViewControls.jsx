import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import PlaylistNav from "../../PlaylistsNav/PlaylistNavContainer";
import GlobalPlayNav from "../../GlobalPlayNav/GlobalPlayNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";
import ButtonFab from "../../ButtonFab/ButtonFab";
import Searchbar from "../../Searchbar/Searchbar";

export default function PlaylistViewControls({
  isPlaylistPopupShown,
  setPlaylistPopupVisibility,
  isAudioPopupShown,
  setAudioPopupVisibility,
  handleOnGlobalPlayClick,
  setSearchbarPopupVisibility,
  isSearchbarPopupShown
}) {
  return (
    <>
      <ButtonFab>
        <SearchIcon
          className="mobile-icon"
          onClick={() => setSearchbarPopupVisibility(true)}
        />
      </ButtonFab>
      <MobilePopupNav
        isPopupShown={isSearchbarPopupShown}
        style={{ width: "100%" }}
      >
        <Searchbar formSubmitted={() => setSearchbarPopupVisibility(false)} />
      </MobilePopupNav>
      <ButtonFab>
        <PlaylistAddCheckIcon
          className="mobile-icon"
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
    </>
  );
}
