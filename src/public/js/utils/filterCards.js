export const filterCards = (cards, filterWord) => {
  if (!filterWord || filterWord.trim().length === 0) return cards;

  const regexp = new RegExp(filterWord, "ig");
  return cards.filter(card => {
    return Object.values(card.expressions).some(expression =>
      regexp.test(expression)
    );
  });
};
