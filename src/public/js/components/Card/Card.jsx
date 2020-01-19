import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import ReplayIcon from "@material-ui/icons/Replay";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Card({
  cardData,
  onSettingTracksToPlay,
  onPauseTrack,
  onStopAudio,
  onResumeTrack,
  currentlyActiveCardId,
  isAudioPaused,
  loadingAudio,
  isGlobalAudioPlay
}) {
  const { expressions } = cardData;
  const { engWord, polWord, engSen, polSen } = expressions;

  const isActive = cardData._id === currentlyActiveCardId;

  const cardBackGroundColor = {
    backgroundColor: isActive ? "#f0ead5" : "#f7f7f7"
  };

  const showControls = () => {
    return (
      <>
        {isAudioPaused ? (
          <ReplayIcon className="card__button" onClick={onResumeTrack} />
        ) : (
          <PauseIcon className="card__button" onClick={onPauseTrack} />
        )}
        <StopIcon className="card__button" onClick={onStopAudio} />
      </>
    );
  };

  const showPlayBtn = () => (
    <PlayCircleOutlineIcon
      className="card__button"
      onClick={onSettingTracksToPlay}
    />
  );

  const displayCardMenu = () => {
    if (loadingAudio && isActive) {
      return <CircularProgress style={{ color: "#d3b06a", fontSize: 40 }} />;
    } else if (isGlobalAudioPlay) {
      return null;
    } else if (isActive) {
      return showControls();
    } else {
      return showPlayBtn();
    }
  };

  return (
    <div className="card" style={cardBackGroundColor}>
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
      <div className="card__right-side">{displayCardMenu()}</div>
    </div>
  );
}
