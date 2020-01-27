import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistCard({
  playlistName,
  playlistId,
  playlistCount,
  isSelectEdit,
  isSelectDelete,
  handleDeletePlaylist
}) {
  const playlistCardClasses =
    isSelectEdit || isSelectDelete
      ? ["playlist-card", "playlist-card--select"]
      : ["playlist-card"];

  let linkPath;

  if (isSelectEdit) {
    linkPath = `/playlists/edit/${playlistId}`;
  } else if (isSelectDelete) {
    linkPath = `/playlists`;
  } else {
    linkPath = `/playlists/${playlistId}`;
  }

  const onDeletePlaylistClick = () => {
    if (isSelectDelete) {
      handleDeletePlaylist(playlistId);
    }
  };

  return (
    <Link
      to={linkPath}
      className="playlist-card__link"
      onClick={onDeletePlaylistClick}
    >
      <div className={playlistCardClasses.join(" ")}>
        <p className="playlist-card__title">{playlistName}</p>
        <span className="playlist-card__amount">Karty: {playlistCount}</span>
      </div>
    </Link>
  );
}
