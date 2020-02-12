import React, { useEffect } from "react";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCardsContainer";

function AllCardsView({
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
  }, [cardsIds]);

  return (
    <CardsWrapper showSpinner={loadingCards}>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}

export default React.memo(AllCardsView);
