import React, { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import ReplayIcon from "@material-ui/icons/Replay";

export default function Card({
  cardData,
  onSettingTracksToPlay,
  onPauseTrack,
  onStopAudio,
  onResumeTrack,
  isActive,
  paused
}) {
  const { expressions, audioIds } = cardData;
  const { engWord, polWord, engSen, polSen } = expressions;
  const {
    engWordTrackId,
    polWordTrackId,
    engSenTrackId,
    polSenTrackId
  } = audioIds;

  const handlePlayClick = () => {
    onSettingTracksToPlay([
      engWordTrackId,
      polWordTrackId,
      engSenTrackId,
      polSenTrackId
    ]);
  };

  const showControls = () => {
    return (
      <>
        {paused ? (
          <ReplayIcon
            style={{ fontSize: 30, color: "#999" }}
            onClick={onResumeTrack}
          />
        ) : (
          <PauseIcon
            style={{ fontSize: 30, color: "#999" }}
            onClick={onPauseTrack}
          />
        )}
        <StopIcon
          style={{ fontSize: 30, color: "#999" }}
          onClick={onStopAudio}
        />
      </>
    );
  };

  const showPlayBtn = () => (
    <PlayCircleOutlineIcon
      style={{ fontSize: 40, color: "#999" }}
      onClick={handlePlayClick}
    />
  );

  return (
    <div className="card">
      <div className="card__left-side">
        <div className="card__words">
          <span className="card__eng-word">{engWord}</span>
          <ChevronRightIcon style={{ color: "#999" }} />
          <span className="card__pol-word">{polWord}</span>
        </div>
        <div className="card__sentences">
          <p className="card__eng-sentence">{engSen}</p>
          <p className="card__pol-sentence">{polSen}</p>
        </div>
      </div>
      <div className="card__right-side">
        {isActive ? showControls() : showPlayBtn()}
      </div>
    </div>
  );
}
