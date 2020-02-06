export const API_BASE_URL = "/api/v1";

const checkForResponseError = async response => {
  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error);
  }
};

export const getRequest = async path => {
  const response = await fetch(API_BASE_URL + path);

  await checkForResponseError(response);

  if (response.status !== 204) {
    return response.json();
  }
};

export const postRequest = async (path, data) => {
  const response = await fetch(API_BASE_URL + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  await checkForResponseError(response);

  return await response.json();
};

export const putRequest = async (path, data) => {
  const response = await fetch(API_BASE_URL + path, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  await checkForResponseError(response);

  return await response.json();
};

export const deleteRequest = async path => {
  const response = await fetch(API_BASE_URL + path, {
    method: "DELETE"
  });

  await checkForResponseError(response);
};

export const audioRequest = async trackId => {
  const response = await fetch(`/api/v1/audioTrack/${trackId}`, {
    responseType: "blob"
  });

  await checkForResponseError(response);

  const resBlob = await response.blob();
  return resBlob;
};
