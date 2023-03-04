import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { Provider } from "react-redux";
//theme
//import "primereact/resources/themes/lara-light-indigo/theme.css";

import "primereact/resources/themes/soho-dark/theme.css";
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
