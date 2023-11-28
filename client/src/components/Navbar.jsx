import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../public/logo-yellowbg.png";


function Navbar(props) {
  return (
    <nav>
      <div className="menu">
        <li>
          <Link to="/preferences">Preferences</Link>
        </li>
        <li id="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
