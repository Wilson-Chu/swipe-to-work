import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar(props) {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to="/preferences">Preferences</Link>
        </li>
        <h1>
          <Link to="/">Swipe to Work</Link>
        </h1>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
