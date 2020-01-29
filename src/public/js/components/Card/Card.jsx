import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import ReplayIcon from "@material-ui/icons/Replay";
import CircularProgress from "@material-ui/core/CircularProgress";
import Radio from "@material-ui/core/Radio";
import {
  CARDS_GUTTER,
  SIDE_PADDING_DESKTOP,
  SIDE_PADDING,
  CARDS_PADDING_TOP,
  CARDS_PADDING_TOP_DESKTOP
} from "../../config";
import ButtonFab from "../ButtonFab/ButtonFab";

export default function Card({
  data,
  index,
  style,
  onSettingTracksToPlay,
  onPauseTrack,
  onStopAudio,
  onResumeTrack,
  isAudioPaused,
  loadingAudio,
  isGlobalAudioPlay,
  isActive,
  isSelectStateActive,
  isCardSelected,
  onSelectCard,
  onUnselectCard,
  isDesktop
}) {
  const cardData = data[index];
  const cardId = cardData._id;
  const { expressions } = cardData;
  const { engWord, polWord, engSen, polSen } = expressions;

  const cardBackGroundColor = {
    backgroundColor: isActive ? "#f0ead5" : "#f7f7f7"
  };

  const cardsSidePadding = isDesktop ? SIDE_PADDING_DESKTOP : SIDE_PADDING;
  const cardsPaddingTop = isDesktop
    ? CARDS_PADDING_TOP_DESKTOP
    : CARDS_PADDING_TOP;
  const cardWidth = isDesktop
    ? window.innerWidth - 2 * SIDE_PADDING_DESKTOP
    : window.innerWidth - 2 * SIDE_PADDING;

  const handleSelectChange = () => {
    if (!isSelectStateActive) return;

    isCardSelected ? onUnselectCard(cardId) : onSelectCard(cardId);
  };

  const showControls = () => {
    return (
      <>
        {isAudioPaused ? (
          <ButtonFab>
            <ReplayIcon className="card__button" onClick={onResumeTrack} />
          </ButtonFab>
        ) : (
          <ButtonFab>
            <PauseIcon className="card__button" onClick={onPauseTrack} />
          </ButtonFab>
        )}
        <ButtonFab>
          <StopIcon className="card__button" onClick={onStopAudio} />
        </ButtonFab>
      </>
    );
  };

  const showPlayBtn = () => (
    <ButtonFab>
      <PlayCircleOutlineIcon
        className="card__button"
        onClick={onSettingTracksToPlay}
      />
    </ButtonFab>
  );

  const showRadioBtn = () => (
    <Radio
      checked={isCardSelected}
      value={cardId}
      name={cardId}
      style={{ color: "#d3b06a" }}
      className="card__radio-btn"
    />
  );

  const displayCardMenu = () => {
    if (isSelectStateActive) {
      return showRadioBtn();
    } else if (loadingAudio && isActive) {
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
    <div
      className="card"
      onClick={handleSelectChange}
      style={{
        ...style,
        ...cardBackGroundColor,
        left: style.left + cardsSidePadding,
        top: style.top + cardsPaddingTop,
        width: cardWidth,
        height: style.height - CARDS_GUTTER
      }}
    >
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
