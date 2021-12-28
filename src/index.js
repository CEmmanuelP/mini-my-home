import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./index.css";

import App from "./App";
import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";

// create store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
