import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCardsContainer";

export default function PlaylistView({
  disableSelectState,
  setDisplayedCards,
  fetchPlaylist,
  cards,
  cardsIds
}) {
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);

    return () => {
      disableSelectState();
    };
  }, [playlistId]);

  useEffect(() => {
    setDisplayedCards(cardsIds);
  }, [cardsIds]);

  return (
    <CardsWrapper showSpinner={false}>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}
