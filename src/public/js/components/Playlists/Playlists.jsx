import React, { useEffect } from "react";
import PlaylistCard from "./PlaylistCard/PlaylistCard";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Backdrop from "../Backdrop";

export default function Playlists({
  playlists,
  fetchPlaylists,
  loadingPlaylists,
  isSelectPlaylistEditState,
  isSelectPlaylistDeleteState,
  disableSelectPlaylistState,
  deletePlaylist
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
          isSelectEdit={isSelectPlaylistEditState}
          isSelectDelete={isSelectPlaylistDeleteState}
          playlistName={playlist.name}
          playlistId={_id}
          key={_id}
          playlistCount={playlistCount}
          handleDeletePlaylist={deletePlaylist}
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
            show={isSelectPlaylistEditState || isSelectPlaylistDeleteState}
            hideOnClick={disableSelectPlaylistState}
          />
        </div>
      </CardsWrapper>
    </>
  );
}
