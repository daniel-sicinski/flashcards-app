import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistCard({
  playlistName,
  playlistId,
  playlistCount,
  isSelectState
}) {
  console.log(isSelectState);
  const playlistCardClasses = isSelectState
    ? ["playlist-card", "playlist-card--select"]
    : ["playlist-card"];

  const linkPath = isSelectState
    ? `/playlists/edit/${playlistId}`
    : `/playlists/${playlistId}`;

  return (
    <Link to={linkPath} className="playlist-card__link">
      <div className={playlistCardClasses.join(" ")}>
        <p className="playlist-card__title">{playlistName}</p>
        <span className="playlist-card__amount">Karty: {playlistCount}</span>
      </div>
    </Link>
  );
}
