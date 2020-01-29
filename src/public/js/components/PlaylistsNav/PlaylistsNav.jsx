import React from "react";
import NavOption from "../NavOption/NavOption";

export default function PlaylistsNav({
  activateSelectPlaylistEditState,
  activateSelectPlaylistDeleteState,
  deletePlaylist,
  history,
  match
}) {
  const openAddNewPlaylistState = () => {
    history.push("/playlists/new");
  };

  const { pathname } = history.location;

  const addPlaylist = (
    <NavOption onClickCb={openAddNewPlaylistState}>Dodaj playlistę</NavOption>
  );

  const handleOnDeletePlaylistClick = () => {
    const { playlistId } = match.params;

    if (pathname === "/playlists") {
      activateSelectPlaylistDeleteState();
    } else if (playlistId) {
      deletePlaylist(playlistId);
    }
  };

  const handleOnUpdatePlaylistClick = () => {
    const { playlistId } = match.params;

    if (pathname === "/playlists") {
      activateSelectPlaylistEditState();
    } else if (playlistId) {
      history.push(`/playlists/edit/${playlistId}`);
    }
  };

  return (
    <>
      {pathname === "/playlists" && addPlaylist}
      <NavOption onClickCb={handleOnUpdatePlaylistClick}>
        Edytuj playlistę
      </NavOption>
      <NavOption onClickCb={handleOnDeletePlaylistClick}>
        Usuń playlistę
      </NavOption>
    </>
  );
}
