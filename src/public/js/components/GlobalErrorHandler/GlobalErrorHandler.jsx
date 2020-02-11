import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function GlobalErrorHandler({ error, clearErrorMessage }) {
  return (
    <Modal showModal={error} closeModal={clearErrorMessage}>
      <div className="modal__body">
        <p>{error}</p>
      </div>
      <div className="modal__controls">
        <Button variant="contained" color="primary" onClick={clearErrorMessage}>
          Ok
        </Button>
      </div>
    </Modal>
  );
}
