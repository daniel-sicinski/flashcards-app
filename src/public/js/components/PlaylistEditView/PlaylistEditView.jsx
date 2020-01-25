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
  clearSelectedCards
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
    console.log("bar");
    return () => {
      clearSelectedCards();
    };
  }, [playlistCardsIds]);

  return (
    <CardsWrapper>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}
