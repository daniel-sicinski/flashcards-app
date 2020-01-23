import React, { useEffect } from "react";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Backdrop from "../Backdrop";

export default function Playlists({
  playlists,
  fetchPlaylists,
  loadingPlaylists,
  isSelectPlaylistState,
  disableSelectPlaylistState
}) {
  useEffect(() => {
    fetchPlaylists();

    return () => {
      disableSelectPlaylistState();
    };
  }, []);

  const renderPlaylists = () => {
    return playlists.map(playlist => {
      const { _id } = playlist;
      const playlistCount = playlist.cardsIds.length;

      return (
        <PlaylistCard
          isSelectState={isSelectPlaylistState}
          playlistName={playlist.name}
          playlistId={_id}
          key={_id}
          playlistCount={playlistCount}
        />
      );
    });
  };

  return (
    <>
      <CardsWrapper showSpinner={loadingPlaylists}>
        <div className="playlists">
          {renderPlaylists()}
          <Backdrop
            show={isSelectPlaylistState}
            hideOnClick={disableSelectPlaylistState}
          />
        </div>
      </CardsWrapper>
    </>
  );
}
