import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";

export default function AudioControls({
  onSkipPrevious,
  onSkipNext,
  onPause,
  onResume,
  onStop,
  isAudioPaused
}) {
  return (
    <div className="audio-controls">
      <SkipPreviousIcon
        onClick={onSkipPrevious}
        className="audio-controls__control audio-controls__control--skip"
      />
      {isAudioPaused ? (
        <PlayArrowIcon onClick={onResume} className="audio-controls__control" />
      ) : (
        <PauseIcon onClick={onPause} className="audio-controls__control" />
      )}
      <StopIcon onClick={onStop} className="audio-controls__control" />
      <SkipNextIcon
        onClick={onSkipNext}
        className="audio-controls__control audio-controls__control--skip"
      />
    </div>
  );
}
