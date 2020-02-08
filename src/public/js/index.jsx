import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ProviderWithRouter from "./ProviderWithRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { customStyleTheme } from "./customStyleTheme";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js");
}

ReactDom.render(
  <Router>
    <ProviderWithRouter>
      <ThemeProvider theme={customStyleTheme}>
        <App />
      </ThemeProvider>
    </ProviderWithRouter>
  </Router>,
  document.getElementById("root")
);
