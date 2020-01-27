import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function CardsWrapper({ children, showSpinner }) {
  return (
    <div>
      {showSpinner ? (
        <div className="cards-wrapper__spinner-box">
          <CircularProgress style={{ color: "#d3b06a" }} />
        </div>
      ) : (
        children
      )}
    </div>
  );
}
