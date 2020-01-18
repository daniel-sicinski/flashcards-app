export default dispatch => (
  cardsData,
  cardsDisplayed,
  setTracksToPlay
) => selectedTracks => {
  let trackNames;

  switch (selectedTracks) {
    case "all":
      console.log("all");
      trackNames = cardsDisplayed
        .map(cardId => Object.values(cardsData[cardId].audioIds))
        .flat();
      break;
    case "words":
      trackNames = cardsDisplayed
        .map(cardId => Object.values(cardsData[cardId].audioIds))
        .flat()
        .filter(
          trackName => trackName.startsWith("s") || trackName.startsWith("p")
        );
      break;
    case "sentences":
      trackNames = cardsDisplayed
        .map(cardId => Object.values(cardsData[cardId].audioIds))
        .flat()
        .filter(
          trackName => trackName.startsWith("z") || trackName.startsWith("t")
        );
      break;
    default:
      trackNames = [];
  }

  return dispatch(setTracksToPlay(trackNames, "globalPlay"));
};
