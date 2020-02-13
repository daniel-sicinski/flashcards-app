import React from "react";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";

import PlaylistNav from "../../PlaylistsNav/PlaylistNavContainer";
import MobilePopupNav from "../../MobilePopupNav/MobilePopupNav";
import ButtonFab from "../../ButtonFab/ButtonFab";

export default function PlaylistsControls({
  isPlaylistPopupShown,
  setPlaylistPopupVisibility
}) {
  return (
    <div>
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
    </div>
  );
}
