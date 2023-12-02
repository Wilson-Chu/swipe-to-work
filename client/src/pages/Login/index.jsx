import React from "react";
import "./Login.scss";
import "../Preferences/buttons.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userID, setUserID] = useState(undefined);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Please enter both email and password");
    }

    axios
      .post("/api/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const userId = res.headers["x-user-auth"];

          setUserID((prev) => userId);
          console.log(userID);

          console.log("Logged in successfully. User ID:", userId);

          // redirect to homepage
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login error:", error.response.data.message);
      });
  };

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>

          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="button-74" role="button" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
