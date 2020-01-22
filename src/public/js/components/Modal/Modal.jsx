import React from "react";
import Backdrop from "../Backdrop";

export default function InputModal({ children, showModal, closeModal }) {
  return showModal ? (
    <>
      <div className="modal">{children}</div>
      <Backdrop show={showModal} hideOnClick={closeModal} darken />
    </>
  ) : null;
}
