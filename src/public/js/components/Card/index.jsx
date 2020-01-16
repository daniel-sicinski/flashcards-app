import React, { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export default function Card({
  cardData,
  onSettingTracksToPlay,
  onPauseTrack,
  onStopAudio
}) {
  const { expressions, audioIds } = cardData;
  const { engWord, polWord, engSen, polSen } = expressions;
  const {
    engWordTrackId,
    polWordTrackId,
    engSenTrackId,
    polSenTrackId
  } = audioIds;

  // let audio = null;

  // const toggleIsPlaying = () => {
  // setIsPlaying(isPlaying => !isPlaying);
  // fetch(`/api/v1/audioFull/${cardId}`, { responseType: "blob" }).then(
  //   function(data) {
  //     var fr = new FileReader();
  //     fr.readAsDataURL(data);
  //     fr.onloadend = function() {
  //       audio = (
  //         <audio autoPlay>
  //           <source src={fr.result} type="audio/mpeg" />
  //         </audio>
  //       );
  //     };
  //   }
  // );
  // };

  // const playAudio = async () => {
  //   if (audio) {
  //     await audio.play();
  //   } else {
  //     try {
  //       const response = await fetch(`/api/v1/audioFull/${cardId}`, {
  //         responseType: "blob"
  //       });
  //       const resBlob = await response.blob();
  //       // const mp3 = new Blob([resBlob]);
  //       // const url = window.URL.createObjectURL(mp3);
  //       const url = window.URL.createObjectURL(resBlob);
  //       const audio = new Audio(url);
  //       setAudio(audio);
  //       audio.load();
  //       await audio.play();
  //     } catch (e) {
  //       console.log("play audio error: ", e);
  //     }
  //   }
  // };

  // const playAudio = async () => {
  //   if (objectURL) {
  //     // const url = window.URL.createObjectURL(blobData);
  //     const audio = new Audio(objectURL);
  //     // setAudio(audio);
  //     audio.load();
  //     await audio.play();
  //   } else {
  //     try {
  //       const response = await fetch(`/api/v1/audioFull/${cardId}`, {
  //         responseType: "blob"
  //       });
  //       const resBlob = await response.blob();
  //       // const mp3 = new Blob([resBlob]);
  //       // const url = window.URL.createObjectURL(mp3);
  //       const url = window.URL.createObjectURL(resBlob);
  //       const audio = new Audio(url);
  //       console.log(url);
  //       setObjectURL(url);
  //       audio.load();
  //       await audio.play();
  //     } catch (e) {
  //       console.log("play audio error: ", e);
  //     }
  //   }
  // };

  // const audio = (
  //   <audio autoPlay>
  //     <source src={`/api/v1/audioFull/${cardId}`} type="audio/mpeg" />
  //   </audio>
  // );

  const handlePlayClick = () => {
    onSettingTracksToPlay([
      engWordTrackId,
      polWordTrackId,
      engSenTrackId,
      polSenTrackId
    ]);
  };

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
        <PlayCircleOutlineIcon
          style={{ fontSize: 40, color: "#999" }}
          onClick={handlePlayClick}
        />
      </div>
    </div>
  );
}
