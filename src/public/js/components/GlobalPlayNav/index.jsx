import React from "react";

export default function GlobalPlayNav({ show, hideGlobalPlayNav }) {
  const classes = show
    ? ["global-play-nav", "global-play-nav--show"]
    : ["global-play-nav"];

  return (
    <div className={classes.join(" ")} onClick={hideGlobalPlayNav}>
      <div className="global-play-nav__option">Odtwórz wszystkie</div>
      <div className="global-play-nav__option">Odtwórz słówka</div>
      <div className="global-play-nav__option">Odtwórz zdania</div>
    </div>
  );
}
