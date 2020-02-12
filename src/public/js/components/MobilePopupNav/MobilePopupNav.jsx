import React from "react";

export default function MobilePopupNav({
  children,
  isPopupShown,
  hidePopup,
  style
}) {
  const classes = isPopupShown
    ? ["mobile-popup-nav", "mobile-popup-nav--show"]
    : ["mobile-popup-nav"];

  return (
    <div
      className={classes.join(" ")}
      style={{ ...style }}
      onClick={hidePopup ? hidePopup : () => {}}
    >
      {children}
    </div>
  );
}
