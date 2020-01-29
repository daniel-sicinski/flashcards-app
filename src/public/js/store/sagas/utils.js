export const mapArrayToObjectByIds = (array, idProp) => {
  return array.reduce((result, item) => {
    result[item[idProp]] = item;
    return result;
  }, {});
};
