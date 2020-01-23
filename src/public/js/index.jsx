import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
import ProviderWithRouter from "./ProviderWithRouter";

ReactDom.render(
  <Router>
    <ProviderWithRouter>
      <App />
    </ProviderWithRouter>
  </Router>,
  document.getElementById("root")
);
