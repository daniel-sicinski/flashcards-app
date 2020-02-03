export const mapArrayToObjectByIds = (array, idProp) => {
  if (array.length === 0) return;

  if (!idProp) {
    throw new Error("idProp should be provided");
  }

  const wrongIdProp = array[0][idProp] === undefined;

  if (wrongIdProp) {
    throw new Error("wrong idProp provided");
  }

  return array.reduce((result, item) => {
    result[item[idProp]] = item;
    return result;
  }, {});
};
