import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../public/logo-yellowbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth0 } from "@auth0/auth0-react";



function Navbar(props) {
  const { logout, isAuthenticated } = useAuth0();
  const loginURL = import.meta.env.VITE_CLIENT_LOGIN_URL;
  return (
    <nav>
      <div className="menu">
        {isAuthenticated ?
          <li id="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </li> :
          <li id="logo">
              <img src={logo} alt="logo" />
          </li>}
        {isAuthenticated &&
          <li>
            <span>
              <FontAwesomeIcon
                className="nav-icons"
                icon="fa-solid fa-bars"
                style={{ color: "#f8fcfc" }}
              />
            </span>
            <Link to="/preferences">Preferences</Link>
          </li>}

        {/* <li id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li> */}
        {isAuthenticated &&
          <li>
            <span>
              <FontAwesomeIcon
                className="nav-icons"
                icon="fa-solid fa-heart"
                style={{ color: "#f8fcfc" }}
              />
            </span>
            <Link to="/saved">Saved Jobs</Link>
          </li>}

        {isAuthenticated &&
          <li>
            <span>
              <FontAwesomeIcon
                icon="fa-solid fa-user"
                style={{ color: "#f8fcfc" }}
              />
            </span>
            <span id="logout" onClick={() => logout({ returnTo: loginURL })}>
              Log out
            </span>
          </li>}
      </div>
    </nav>
  );
}

export default Navbar;
