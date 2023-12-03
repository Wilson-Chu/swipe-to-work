import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import { ApplicationDataProvider } from "./providers/ApplicationDataProvider.jsx";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

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
      <App />
    </ApplicationDataProvider>
  </Auth0Provider>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Auth0Provider
//     domain={domain}
//     clientId={clientId}
//     authorizationParams={{
//       redirect_uri: prefsURL,
//     }}
//     onRedirectCallback={() => {
//       console.log("REDIRECT CALLBACK");

//       const [userId, setUserId] = useState(undefined);

//       useEffect(() => {
//         console.log("USE EFFECT HAS RUN BEFORE IF");
//         if (isAuthenticated) {
//           console.log("USE EFFECT HAS RUN");
//           const email = user.email;

//           axios
//             .post("/api/login", { email })
//             .then(() => {
//               axios
//                 .get("/api/login", { params: { email } })
//                 .then((res) => {
//                   console.log("frontend login res", res.data);
//                   setUserId(res.data);
//                 })
//                 .catch((error) => console.log(error));
//             })
//             .catch((error) => console.log(error));
//         }
//       }, [isAuthenticated]);
//     }}
//   >
//     <App />
//   </Auth0Provider>
// );
