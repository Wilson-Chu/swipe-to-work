import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import { ApplicationDataProvider } from "./providers/ApplicationDataProvider.jsx";
axios.defaults.baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const prefsURL = import.meta.env.VITE_CLIENT_PREFS_URL;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  authorizationParams={{
    redirect_uri: prefsURL,
  }}
>
  <ApplicationDataProvider>
    {/* <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: prefsURL,
      }}
    > */}
      <App />
    {/* </Auth0Provider> */}
  </ApplicationDataProvider>
  </Auth0Provider>
);
