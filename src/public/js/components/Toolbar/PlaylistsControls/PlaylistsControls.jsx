import React from "react";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import PlaylistNav from "../../PlaylistsNav/PlaylistNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";

export default function PlaylistsControls({
  isPlaylistPopupShown,
  setPlaylistPopupVisibility
}) {
  return (
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
}
