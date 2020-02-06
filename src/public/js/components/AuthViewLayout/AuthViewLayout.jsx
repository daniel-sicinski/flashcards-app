import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function AuthViewLayout({
  children,
  authError,
  dismissAuthError
}) {
  return (
    <div className="authView">
      <div className="authView__card">{children}</div>
      <Modal showModal={authError} closeModal={dismissAuthError}>
        <p className="authView__error-message">{authError}</p>
        <Button variant="contained" color="primary" onClick={dismissAuthError}>
          Ok
        </Button>
      </Modal>
    </div>
  );
}
