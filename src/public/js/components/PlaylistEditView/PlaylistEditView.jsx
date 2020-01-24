import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCards";

export default function PlaylistEditView({
  cards,
  activateSelectState,
  disableSelectState,
  setSelectedCards,
  fetchPlaylist,
  playlistCardsIds,
  clearSelectedCards
}) {
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);
    activateSelectState();

    return () => {
      disableSelectState();
    };
  }, [playlistId]);

  useEffect(() => {
    setSelectedCards(playlistCardsIds);

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
