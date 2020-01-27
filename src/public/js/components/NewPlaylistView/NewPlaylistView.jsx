import React, { useEffect } from "react";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import RenderCards from "../RenderCards/RenderCards";

export default function NewPlaylistView({
  cards,
  loadingCards,
  activateSelectState,
  disableSelectState
}) {
  useEffect(() => {
    activateSelectState();

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
