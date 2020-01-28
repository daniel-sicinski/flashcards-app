import React, { useState, useEffect } from "react";
import Toolbar from "../Toolbar/ToolbarContainer";
import SideNav from "./SideNav/SideNav";
import Backdrop from "../Backdrop";

export default function Navigation({ isDesktop }) {
  const [isSideNavVisible, setSideNavVisibility] = useState(false);

  useEffect(() => {
    console.log(isDesktop);
    isDesktop ? setSideNavVisibility(true) : setSideNavVisibility(false);
  }, [isDesktop]);

  const MobileNav = () => (
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

  const DesktopNav = () => (
    <>
      <SideNav isSideNavVisible={isSideNavVisible} />
    </>
  );

  return <>{isDesktop ? <DesktopNav /> : <MobileNav />}</>;
}
