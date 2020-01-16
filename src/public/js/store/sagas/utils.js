export const audioRequest = async trackId => {
  const response = await fetch(`/api/v1/audioTrack/${trackId}`, {
    responseType: "blob"
  });
  const resBlob = await response.blob();
  return resBlob;
};
