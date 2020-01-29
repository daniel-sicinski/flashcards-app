import React, { useEffect } from "react";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCardsContainer";

export default function AllCardsView({
  cards,
  cardsIds,
  loadingCards,
  setDisplayedCards,
  disableSelectState
}) {
  useEffect(() => {
    setDisplayedCards(cardsIds);

    return () => {
      disableSelectState();
    };
  }, []);

  return (
    <CardsWrapper showSpinner={loadingCards}>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}
