import React, { useState } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import GlobalPlayNav from "../GlobalPlayNav/GlobalPlayNavContainer";
import Backdrop from "../Backdrop";
import AudioControls from "../AudioControls/AudioControlsContainer";

export default function Toolbar({
  isGlobalAudioPlay,
  isSelectStateActive,
  activateSelectState,
  disableSelectState
}) {
  const [isComponentShown, setGlobalPlayNavVisibility] = useState(false);

  return (
    <div className="toolbar">
      {isGlobalAudioPlay ? (
        <AudioControls />
      ) : (
        <div className="toolbar__nav">
          <MenuIcon className="toolbar__nav-icon" />
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
            onClick={() => setGlobalPlayNavVisibility(true)}
          />
          <GlobalPlayNav
            isComponentShown={isComponentShown}
            hideGlobalPlayNav={() => setGlobalPlayNavVisibility(false)}
          />
        </div>
      )}
      <Backdrop
        show={isComponentShown}
        hideOnClick={() => setGlobalPlayNavVisibility(false)}
      />
    </div>
  );
}
