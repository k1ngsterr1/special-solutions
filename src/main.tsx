import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

// Styles
import "./shared/styles/global.scss";
import { Provider } from "react-redux";
import { store } from "@shared/lib/redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
