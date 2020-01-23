import React, { useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function PlaylistAddEdit({
  addPlaylist,
  disableSelectState,
  waitingForRequest,
  selectedCardsIds
}) {
  const [modalOpened, setModalVisibility] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const isSelectedCard = selectedCardsIds.length > 0;

  const handleOnSubmit = e => {
    e.preventDefault();

    addPlaylist(playlistName);
    disableSelectState();
  };

  const handleDoneButton = () => {
    if (!isSelectedCard) return;
    setModalVisibility(true);
  };

  return (
    <>
      <Modal
        showModal={modalOpened}
        closeModal={() => setModalVisibility(false)}
      >
        {waitingForRequest ? (
          <div className="cards-wrapper__spinner-box">
            <CircularProgress style={{ color: "#d3b06a" }} />
          </div>
        ) : (
          <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
            <InputField
              inputType="text"
              id="playlist_name"
              label="Podaj nazwę playlisty"
              value={playlistName}
              onChange={e => setPlaylistName(e.target.value)}
            />
            <Button type="submit">Dodaj playlistę</Button>
          </form>
        )}
      </Modal>
      <DoneIcon
        style={{ color: isSelectedCard ? "#999" : "#c0c0c0" }}
        className="playlistAddEdit__icon"
        onClick={handleDoneButton}
      />
    </>
  );
}
