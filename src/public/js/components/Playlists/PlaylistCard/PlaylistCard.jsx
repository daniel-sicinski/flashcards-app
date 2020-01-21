import React from "react";

export default function PlaylistCard({
  playlistName,
  playlistId,
  playlistCount
}) {
  return (
    <div className="playlist-card">
      <p className="playlist-card__title">{playlistName}</p>
      <span className="playlist-card__amount">Karty: {playlistCount}</span>
    </div>
  );
}
