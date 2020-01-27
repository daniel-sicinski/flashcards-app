import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardsWrapper from "../CardsWrapper/CardsWrapper";
import Card from "../Card/CardContainer";
import RenderCards from "../RenderCards/RenderCards";

export default function PlaylistView({ fetchPlaylist, cards }) {
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist(playlistId);
  }, [playlistId]);

  return (
    <CardsWrapper showSpinner={false}>
      <RenderCards cards={cards} />
    </CardsWrapper>
  );
}
