import React from "react";
import ReactDom from "react-dom";
import localForage from "localforage";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ProviderWithRouter from "./ProviderWithRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { customStyleTheme } from "./customStyleTheme";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./serviceWorker.js");
  });
}

localForage.config({
  name: "FlashcardsAppDB"
});

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
