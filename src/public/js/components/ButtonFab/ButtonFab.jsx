import React from "react";
import Fab from "@material-ui/core/Fab";

export default function ButtonFab({ children }) {
  return <Fab className="button-fab">{children}</Fab>;
}
