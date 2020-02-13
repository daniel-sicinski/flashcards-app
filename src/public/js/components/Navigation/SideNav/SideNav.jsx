import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideNav({
  isSideNavVisible,
  hideSideNavOnClick = () => {}
}) {
  const classes = isSideNavVisible
    ? ["side-nav", "side-nav--show"]
    : ["side-nav"];

  return (
    <nav className={classes.join(" ")} onClick={hideSideNavOnClick}>
      <NavLink
        to={"/"}
        exact
        activeClassName="side-nav__link--active"
        className="side-nav__link"
      >
        Wszystkie karty
      </NavLink>
      <NavLink
        to={"/playlists"}
        activeClassName="side-nav__link--active"
        className="side-nav__link"
      >
        Playlisty
      </NavLink>
      <NavLink
        to={"/categories"}
        activeClassName="side-nav__link--active"
        className="side-nav__link"
      >
        Kategorie
      </NavLink>
      <NavLink
        to={"/flashcards"}
        activeClassName="side-nav__link--active"
        className="side-nav__link"
      >
        Fiszki
      </NavLink>
      <NavLink
        to={"/user"}
        activeClassName="side-nav__link--active"
        className="side-nav__link"
      >
        Twoje konto
      </NavLink>
      <NavLink
        to={"/settings"}
        activeClassName="side-nav__link--active"
        className="side-nav__link"
      >
        Ustawienia
      </NavLink>
    </nav>
  );
}
