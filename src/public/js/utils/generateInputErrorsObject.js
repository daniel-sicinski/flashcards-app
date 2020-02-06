export const generateInputErrorsObject = (...inputNames) => {
  const inputErrorsObject = {};

  inputNames.forEach(name => {
    inputErrorsObject[name] = {
      error: false,
      helperText: []
    };
  });

  return inputErrorsObject;
};
