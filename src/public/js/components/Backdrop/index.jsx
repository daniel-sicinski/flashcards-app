import React from "react";

export default function Backdrop({ hideOnClick, show }) {
  const classes = show ? ["backdrop", "backdrop--show"] : ["backdrop"];

  return <div className={classes.join(" ")} onClick={hideOnClick}></div>;
}
