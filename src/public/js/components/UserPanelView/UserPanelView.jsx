import React from "react";
import Button from "../Button/Button";

export default function UserPanelView({ user, logoutRequestStart }) {
  return (
    <div className="userPanel">
      <h2 className="header-2">{user.userName}</h2>
      <Button variant="contained" color="primary" onClick={logoutRequestStart}>
        Wyloguj
      </Button>
    </div>
  );
}
