import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner() {
  return (
    <div className="spinner-box">
      <CircularProgress style={{ color: "#d3b06a" }} />
    </div>
  );
}
