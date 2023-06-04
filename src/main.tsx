import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth_Prodiver from "./context/auth_provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth_Prodiver>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth_Prodiver>
  </React.StrictMode>
);
