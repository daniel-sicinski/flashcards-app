import React from "react";
import Card from "../Card/CardContainer";

export default function RenderCards(cards) {
  return cards.map(card => {
    const { _id } = card;

    return <Card cardData={card} cardId={_id} key={_id} />;
  });
}
