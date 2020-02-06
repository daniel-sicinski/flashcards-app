import React from "react";
import Spinner from "../Spinner/Spinner";

export default function CardsWrapper({ children, showSpinner }) {
  return <div>{showSpinner ? <Spinner /> : children}</div>;
}
