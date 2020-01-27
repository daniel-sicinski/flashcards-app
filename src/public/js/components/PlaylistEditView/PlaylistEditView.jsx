import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCards";

export default function PlaylistEditView({
  cards,
  setPlaylistForEdit,
  disablePlaylistEditState,
  setSelectedCards,
  fetchPlaylist,
  playlistCardsIds,
  clearSelectedCards,
  loadingCards
}) {
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);
    setPlaylistForEdit(playlistId);
    return () => {
      disablePlaylistEditState();
    };
  }, [playlistId]);

  useEffect(() => {
    setSelectedCards(playlistCardsIds);
    return () => {
      clearSelectedCards();
    };
  }, [playlistCardsIds]);

  return (
    <CardsWrapper showSpinner={loadingCards}>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}
