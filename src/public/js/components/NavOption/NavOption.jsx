import React from "react";

export default function NavOption({ children, onClickCb, isDisabled }) {
  const classes = isDisabled
    ? ["nav-option", "nav-option--disabled"]
    : ["nav-option"];
  return (
    <div className={classes.join(" ")} onClick={onClickCb}>
      {children}
    </div>
  );
}
