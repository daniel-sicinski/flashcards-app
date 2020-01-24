export const sortCardsSelected = (cards, selectedCardsIds) => {
  if (selectedCardsIds.length === 0) return [];

  const cardsCopy = [...cards];

  return cardsCopy.sort((c1, c2) => {
    if (selectedCardsIds.includes(c1._id)) {
      return -1;
    } else if (selectedCardsIds.includes(c2._id)) {
      return 1;
    } else {
      return 0;
    }
  });
};
