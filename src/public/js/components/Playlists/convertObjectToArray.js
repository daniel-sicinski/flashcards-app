export const convertObjectToArray = object => {
  const keys = Object.keys(object);
  return keys.map(key => object[key]);
};
