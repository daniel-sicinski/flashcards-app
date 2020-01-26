import React from "react";

export default function PlaylistsNav({
  activateSelectPlaylistEditState,
  activateSelectPlaylistDeleteState,
  history
}) {
  const openAddNewPlaylistState = () => {
    history.push("/playlists/new");
  };
  return (
    <>
      <div className="playlist-nav__option" onClick={openAddNewPlaylistState}>
        Dodaj playlistę
      </div>
      <div
        className="playlist-nav__option"
        onClick={activateSelectPlaylistEditState}
      >
        Edytuj playlistę
      </div>
      <div
        className="playlist-nav__option"
        onClick={activateSelectPlaylistDeleteState}
      >
        Usuń playlistę
      </div>
    </>
  );
}
