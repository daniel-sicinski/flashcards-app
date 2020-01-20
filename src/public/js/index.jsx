import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDom.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
