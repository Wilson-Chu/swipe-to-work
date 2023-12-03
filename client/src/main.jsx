import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import { ApplicationDataProvider } from "./providers/ApplicationDataProvider.jsx";
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApplicationDataProvider>
    <App />
  </ApplicationDataProvider>
);
