import React from "react";

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
    <div className="playlist-nav__option" onClick={openAddNewPlaylistState}>
      Dodaj playlistę
    </div>
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
      <div
        className="playlist-nav__option"
        onClick={handleOnUpdatePlaylistClick}
      >
        Edytuj playlistę
      </div>
      <div
        className="playlist-nav__option"
        onClick={handleOnDeletePlaylistClick}
      >
        Usuń playlistę
      </div>
    </>
  );
}
