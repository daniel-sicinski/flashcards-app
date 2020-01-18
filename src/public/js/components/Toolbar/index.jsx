import React, { useState } from "react";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import GlobalPlayNav from "../../components/GlobalPlayNav";
import Backdrop from "../../components/Backdrop";

export default function Toolbar() {
  const [showGlobalPlayNav, setGlobalPlayNavVisibility] = useState(false);

  return (
    <>
      <div className="toolbar">
        <MenuIcon className="toolbar__icon" />
        <SearchIcon className="toolbar__icon" />
        <AddCircleOutlineIcon className="toolbar__icon" />
        <PlayCircleFilledIcon
          className="toolbar__icon"
          onClick={() => setGlobalPlayNavVisibility(true)}
        />
        <GlobalPlayNav
          show={showGlobalPlayNav}
          hideGlobalPlayNav={() => setGlobalPlayNavVisibility(false)}
        />
      </div>
      <Backdrop
        show={showGlobalPlayNav}
        hideOnClick={() => setGlobalPlayNavVisibility(false)}
      />
    </>
  );
}
