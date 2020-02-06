import React from "react";
import Button from "../Button/Button";

export default function UserPanelView({ userName, logoutRequestStart }) {
  return (
    <div className="userPanel">
      <h2 className="header-2">{userName}</h2>
      <Button variant="contained" color="primary" onClick={logoutRequestStart}>
        Wyloguj
      </Button>
    </div>
  );
}
