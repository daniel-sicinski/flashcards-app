import React, { useEffect } from "react";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
import CardsWrapper from "../CardsWrapper/CardsWrapper";

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

  return (
    <CardsWrapper showSpinner={loadingPlaylists}>
      {renderPlaylists()}
    </CardsWrapper>
  );
}
