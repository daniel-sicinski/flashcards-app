export const handleErrorMessage = errorMessage => {
  switch (errorMessage) {
    case "Failed to fetch":
      return "Nie udało się. Sprawdź połączenie z internetem.";
    default:
      return errorMessage;
  }
};
