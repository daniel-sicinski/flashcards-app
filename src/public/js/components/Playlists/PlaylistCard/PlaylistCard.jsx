import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistCard({
  playlistName,
  playlistId,
  playlistCount
}) {
  return (
    <Link to={`/playlists/${playlistId}`} className="playlist-card__link">
      <div className="playlist-card">
        <p className="playlist-card__title">{playlistName}</p>
        <span className="playlist-card__amount">Karty: {playlistCount}</span>
      </div>
    </Link>
  );
}
