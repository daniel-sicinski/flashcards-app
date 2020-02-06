import React, { useState, useEffect } from "react";
import DoneIcon from "@material-ui/icons/Done";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import InputField from "../InputField/InputField";
import CircularProgress from "@material-ui/core/CircularProgress";
import NavOption from "../NavOption/NavOption";
import ButtonFab from "../ButtonFab/ButtonFab";

export default function PlaylistAddEdit({
  addPlaylist,
  waitingForRequest,
  selectedCardsIds,
  editedPlaylist,
  updatePlaylist,
  disablePlaylistEditState,
  isDesktop
}) {
  const [modalOpened, setModalVisibility] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    if (editedPlaylist) {
      setPlaylistName(editedPlaylist.name);
    }
  }, [editedPlaylist]);

  useEffect(() => {
    return () => {
      disablePlaylistEditState();
    };
  }, []);

  const isSelectedCard = selectedCardsIds.length > 0;

  const handleOnSubmit = e => {
    e.preventDefault();

    const playlistData = {
      name: playlistName,
      cardsIds: selectedCardsIds
    };

    if (editedPlaylist) {
      updatePlaylist(editedPlaylist._id, playlistData);
    } else {
      addPlaylist(playlistData);
    }
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
            <Button type="submit" variant="contained" color="primary">
              {editedPlaylist ? "Zaktualizuj" : "Dodaj"}
            </Button>
          </form>
        )}
      </Modal>
      {isDesktop ? (
        <NavOption onClickCb={handleDoneButton} isDisabled={!isSelectedCard}>
          Przejdź dalej
        </NavOption>
      ) : (
        <ButtonFab>
          <DoneIcon
            style={{ color: isSelectedCard ? "#999" : "#c0c0c0" }}
            className="playlistAddEdit__icon"
            onClick={handleDoneButton}
          />
        </ButtonFab>
      )}
    </>
  );
}
