import React, { useState } from "react";
import Toolbar from "../Toolbar/ToolbarContainer";
import SideNav from "./SideNav/SideNav";
import Backdrop from "../Backdrop";

export default function Navigation() {
  const [isSideNavVisible, setSideNavVisibility] = useState(false);
  return (
    <>
      <SideNav
        isSideNavVisible={isSideNavVisible}
        hideSideNavOnClick={() => setSideNavVisibility(false)}
      />
      <Toolbar showSideNav={() => setSideNavVisibility(true)} />;
      <Backdrop
        show={isSideNavVisible}
        hideOnClick={() => setSideNavVisibility(false)}
      />
    </>
  );
}
