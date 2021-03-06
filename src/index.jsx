import "./index.scss";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./Components/App";
import store from "./Store/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
