import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

// Styles
import "./shared/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
