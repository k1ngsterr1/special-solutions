import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

// Redux
import { store } from "@shared/lib/redux/store";
import { Provider } from "react-redux";

// Styles
import "react-image-gallery/styles/css/image-gallery.css";
import "./shared/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
