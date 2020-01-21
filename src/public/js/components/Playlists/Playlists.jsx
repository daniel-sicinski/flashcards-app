import React, { useEffect } from "react";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Playlists({
  playlists,
  fetchPlaylists,
  loadingPlaylists
}) {
  useEffect(() => {
    fetchPlaylists();
  }, []);

  const renderPlaylists = () => {
    return playlists.map(playlist => {
      const { _id } = playlist;
      const playlistCount = playlist.cardsIds.length;

      return (
        <PlaylistCard
          playlistName={playlist.name}
          playlistId={_id}
          key={_id}
          playlistCount={playlistCount}
        />
      );
    });
  };

  const renderSpinner = () => (
    <div className="playlists-spinner-box">
      <CircularProgress style={{ color: "#d3b06a" }} />
    </div>
  );

  return (
    <div className="playlists-container">
      {loadingPlaylists ? renderSpinner() : renderPlaylists()}
    </div>
  );
}
