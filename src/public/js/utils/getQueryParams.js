export const getQueryParams = queryString => {
  if (!queryString) return {};
  if (!/\?.*/g.test(queryString)) throw new Error("Not a valid query string.");

  queryString = queryString.slice(1);
  const paramPairs = queryString.split("&");

  return paramPairs.reduce((acc, pair) => {
    const [key, val] = pair.split("=");
    acc[key] = val;
    return acc;
  }, {});
};
