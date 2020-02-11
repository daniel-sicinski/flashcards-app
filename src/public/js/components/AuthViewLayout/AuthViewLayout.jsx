import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function AuthViewLayout({ children }) {
  return (
    <div className="authView">
      <div className="authView__card">{children}</div>
    </div>
  );
}
