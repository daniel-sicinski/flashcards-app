import React from "react";

export default function PlaylistsNav({ activateSelectPlaylistState, history }) {
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
        onClick={activateSelectPlaylistState}
      >
        Edytuj playlistę
      </div>
      <div className="playlist-nav__option">Usuń playlistę</div>
    </>
  );
}
