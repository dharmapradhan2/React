import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="navbar-expand-lg">
      <ul className="nav container-fluid">
        <li className="nav-item slam-left">
          <NavLink to="/">Redux Movie App</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/movie/er">Movies</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="contact" to="#">
            Contact
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Header;
