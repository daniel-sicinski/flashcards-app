import { createMuiTheme } from "@material-ui/core/styles";

export const customStyleTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffd581",
      light: "#ffe0a1",
      dark: "#d3b06a"
    }
  },
  typography: {
    fontFamily: "'Roboto Condensed', 'sans-serif'",
    body1: {
      fontSize: "1.8rem",
      fontFamily: "'Roboto Condensed', 'sans-serif'"
    }
  }
});
