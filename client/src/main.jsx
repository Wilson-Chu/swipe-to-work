import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import axios from 'axios';
import { Auth0Provider } from "@auth0/auth0-react";
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const cliendId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={cliendId}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
