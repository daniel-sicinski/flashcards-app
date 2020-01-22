import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Card from "../Card/CardContainer";

export default function PlaylistView({ fetchPlaylist, cards }) {
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);
  }, [playlistId]);

  const renderCards = () => {
    return cards.map(card => {
      const { _id } = card;

      return <Card cardData={card} cardId={_id} key={_id} />;
    });
  };

  return <CardsWrapper showSpinner={false}>{renderCards()}</CardsWrapper>;
}
