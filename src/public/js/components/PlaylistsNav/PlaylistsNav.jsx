import React from "react";

export default function PlaylistsNav({ activateSelectState, history }) {
  const openAddNewPlaylistState = () => {
    history.push("/playlists/new");
  };
  return (
    <>
      <div className="playlist-nav__option" onClick={openAddNewPlaylistState}>
        Dodaj playlistę
      </div>
      <div className="playlist-nav__option">Edytuj playlistę</div>
      <div className="playlist-nav__option">Usuń playlistę</div>
    </>
  );
}
