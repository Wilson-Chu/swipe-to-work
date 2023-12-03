import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./Login.scss";
import "../Preferences/buttons.scss";
import React, { useState, useEffect } from "react";

const LoginButton = function () {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   console.log("USE EFFECT HAS RUN BEFORE IF");
  //   if (isAuthenticated) {
  //     console.log("USE EFFECT HAS RUN");
  //     const email = user.email;

  //     axios
  //       .post("/api/login", { email })
  //       .then(() => {
  //         axios
  //           .get("/api/login", { params: { email } })
  //           .then((res) => {
  //             console.log("frontend login res", res.data);
  //             setUserId(res.data);
  //           })
  //           .catch((error) => console.log(error));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [isAuthenticated]);

  return (
    !isAuthenticated && (
      <div className="login-page">
        <section>
          Welcome to Swipe to Work, <br />
          let's get you matched with your perfect job!
        </section>
        <button
          className="button-74"
          role="button"
          type="submit"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    )
  );
};

export default LoginButton;
