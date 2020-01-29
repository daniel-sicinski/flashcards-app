import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ButtonFab from "../ButtonFab/ButtonFab";

export default function AudioControls({
  onSkipPrevious,
  onSkipNext,
  onPause,
  onResume,
  onStop,
  isAudioPaused,
  isAudioLoading
}) {
  const buttonColorStyle = {
    color: isAudioLoading ? "#dadada" : "#999"
  };

  return (
    <div className="audio-controls">
      {/* <SkipPreviousIcon
        onClick={isAudioLoading ? () => {} : onSkipPrevious}
        className="audio-controls__control audio-controls__control--skip"
        style={buttonColorStyle}
      /> */}
      {isAudioPaused ? (
        <ButtonFab>
          <PlayArrowIcon
            onClick={isAudioLoading ? () => {} : onResume}
            className="audio-controls__control"
            style={buttonColorStyle}
          />
        </ButtonFab>
      ) : (
        <ButtonFab>
          <PauseIcon
            onClick={isAudioLoading ? () => {} : onPause}
            className="audio-controls__control"
            style={buttonColorStyle}
          />
        </ButtonFab>
      )}
      <ButtonFab>
        <StopIcon
          onClick={isAudioLoading ? () => {} : onStop}
          className="audio-controls__control"
          style={buttonColorStyle}
        />
      </ButtonFab>

      {/* <SkipNextIcon
        onClick={isAudioLoading ? () => {} : onSkipNext}
        className="audio-controls__control audio-controls__control--skip"
        style={buttonColorStyle}
      /> */}
    </div>
  );
}
