import React from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <MenuIcon style={{ fontSize: 40, color: "#999" }} />
      <SearchIcon style={{ fontSize: 40, color: "#999" }} />
      <AddCircleOutlineIcon style={{ fontSize: 40, color: "#999" }} />
      <PlayCircleFilledIcon style={{ fontSize: 40, color: "#999" }} />
    </div>
  );
}
