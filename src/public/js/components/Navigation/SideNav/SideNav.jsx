import React from "react";
import { Link } from "react-router-dom";

export default function SideNav({ isSideNavVisible, hideSideNavOnClick }) {
  const classes = isSideNavVisible
    ? ["side-nav", "side-nav--show"]
    : ["side-nav"];

  return (
    <nav className={classes.join(" ")} onClick={hideSideNavOnClick}>
      <Link to={"/"} className="side-nav__link">
        Wszystkie karty
      </Link>
      <Link to={"/playlists"} className="side-nav__link">
        Playlisty
      </Link>
      <Link to={"/"} className="side-nav__link">
        Kategorie
      </Link>
      <Link to={"/"} className="side-nav__link">
        Testy
      </Link>
      <Link to={"/"} className="side-nav__link">
        Twoje konto
      </Link>
      <Link to={"/"} className="side-nav__link">
        Ustawienia
      </Link>
    </nav>
  );
}
