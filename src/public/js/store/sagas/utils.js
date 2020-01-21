export const audioRequest = async trackId => {
  const response = await fetch(`/api/v1/audioTrack/${trackId}`, {
    responseType: "blob"
  });
  const resBlob = await response.blob();
  return resBlob;
};

export const cardsRequest = async () => {
  const response = await fetch("/api/v1/cards");
  const resJson = await response.json();

  return resJson.data.cards;
};

export const mapArrayToObjectByIds = (array, idProp) => {
  return array.reduce((result, item) => {
    result[item[idProp]] = item;
    return result;
  }, {});
};
