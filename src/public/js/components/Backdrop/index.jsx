import React from "react";

export default function Backdrop({ hideOnClick, show, darken }) {
  const showClass = show ? "backdrop--show" : "";
  const darkenClass = darken ? "backdrop--darken" : "";
  const classes = ["backdrop", showClass, darkenClass];

  return <div className={classes.join(" ")} onClick={hideOnClick}></div>;
}
