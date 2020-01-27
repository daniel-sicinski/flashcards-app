export const mapPlaylistToCards = (playlist, cardsData) => {
  if (!playlist) return [];

  return playlist.cardsIds.map(cardId => cardsData[cardId]);
};
