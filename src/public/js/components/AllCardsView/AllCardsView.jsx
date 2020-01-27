import React, { useEffect } from "react";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCards";

export default function AllCardsView({
  cards,
  cardsIds,
  loadingCards,
  setDisplayedCards
}) {
  useEffect(() => {
    setDisplayedCards(cardsIds);
  }, []);

  return (
    <CardsWrapper showSpinner={loadingCards}>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}
