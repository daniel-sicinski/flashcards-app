import React from "react";

export default function GlobalPlayNav({
  isComponentShown,
  hideGlobalPlayNav,
  playSelectedTracks
}) {
  const classes = isComponentShown
    ? ["global-play-nav", "global-play-nav--show"]
    : ["global-play-nav"];

  return (
    <div className={classes.join(" ")} onClick={hideGlobalPlayNav}>
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
    </div>
  );
}
