import React from "react";
import { NavLink } from "react-router-dom";
import Slide from "@material-ui/core/Slide";

export default function SideNav({
  isSideNavVisible,
  hideSideNavOnClick = () => {}
}) {
  return (
    <Slide direction="right" in={isSideNavVisible} mountOnEnter unmountOnExit>
      <nav className="side-nav" onClick={hideSideNavOnClick}>
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
          to={"/flashcardsSelect"}
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
    </Slide>
  );
}
