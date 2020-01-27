import React from "react";
import Card from "../Card/CardContainer";

export default function RenderCards({ cards }) {
  if (!cards) return null;

  return cards.map(card => {
    const { _id } = card;

    return <Card cardData={card} cardId={_id} key={_id} />;
  });
}
