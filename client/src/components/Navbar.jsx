import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../public/logo-yellowbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";



function Navbar(props) {
  return (
    <nav>
      <div className="menu">
        <li id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>

        <li>
          <span>
            <FontAwesomeIcon
              className="nav-icons"
              icon="fa-solid fa-bars"
              style={{ color: "#f8fcfc" }}
            />
          </span>
          <Link to="/preferences">Preferences</Link>
        </li>

        {/* <li id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li> */}

        <li>
          <span>
            <FontAwesomeIcon
              className="nav-icons"
              icon="fa-solid fa-heart"
              style={{ color: "#f8fcfc" }}
            />
          </span>
          <Link to="/saved">Saved Jobs</Link>
        </li>

        <li>
          <span>
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              style={{ color: "#f8fcfc" }}
            />
          </span>
          {/* <Link to="/login">Logout</Link> */}
          <LoginButton></LoginButton>
          <LogoutButton></LogoutButton>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
