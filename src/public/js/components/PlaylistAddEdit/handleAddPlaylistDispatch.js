export const handleAddPlaylistDispatch = (
  dispatch,
  addPlaylistCb
) => selectedCardsIds => playlistName => {
  const playlistData = {
    name: playlistName,
    cardsIds: selectedCardsIds
  };

  dispatch(addPlaylistCb(playlistData));
};
