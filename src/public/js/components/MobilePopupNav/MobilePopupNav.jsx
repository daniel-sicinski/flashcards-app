import React from "react";
import Slide from "@material-ui/core/Slide";

export default function MobilePopupNav({
  children,
  isPopupShown,
  hidePopup,
  style
}) {
  return (
    <Slide direction="left" in={isPopupShown} mountOnEnter unmountOnExit>
      <div
        className="mobile-popup-nav"
        style={{ ...style }}
        onClick={hidePopup ? hidePopup : () => {}}
      >
        {children}
      </div>
    </Slide>
  );
}
