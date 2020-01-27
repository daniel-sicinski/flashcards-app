import React from "react";

export default function GlobalPlayNav({ playSelectedTracks }) {
  return (
    <>
      <div
        className="global-play-nav__option"
        onClick={() => playSelectedTracks("all")}
      >
        Odtwórz wszystkie
      </div>
      <div
        className="global-play-nav__option"
        onClick={() => playSelectedTracks("words")}
      >
        Odtwórz słówka
      </div>
      <div
        className="global-play-nav__option"
        onClick={() => playSelectedTracks("sentences")}
      >
        Odtwórz zdania
      </div>
    </>
  );
}
