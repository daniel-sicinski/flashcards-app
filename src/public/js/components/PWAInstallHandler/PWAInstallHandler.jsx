import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

export default function PWAInstallHandler({
  showModal,
  deferredPrompt,
  clearDeferredPrompt
}) {
  const handleInstallPrompt = () => {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(() => {
      clearDeferredPrompt();
    });
  };

  return (
    <Modal showModal={showModal} closeModal={clearDeferredPrompt}>
      <p className="pwaInstallHandler__message">
        Czy chcesz dodać aplikację do ekranu głównego?
      </p>
      <div className="pwaInstallHandler__btn-container">
        <Button
          variant="contained"
          color="primary"
          onClick={handleInstallPrompt}
        >
          Tak
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={clearDeferredPrompt}
        >
          Nie
        </Button>
      </div>
    </Modal>
  );
}
