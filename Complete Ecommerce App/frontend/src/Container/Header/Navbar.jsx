import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light d-flex flex-column">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/home">
          Ecommerce App
        </NavLink>
        <div className="navbar bd-highlight">
          <ul className="d-flex flex-row m-0">
            <div className="nav-item nav-link ">
              <NavLink className="btn btn-sm" to="/home">
                All Product's
              </NavLink>
            </div>
            <div className="nav-item nav-link ">
              <NavLink className="btn btn-sm btn-success" to="/cart">
                Cart
                <i>&#x1F6D2;</i>
              </NavLink>
            </div>
          </ul>
          <div className="d-flex m-1">
            <NavLink className="btn btn-sm btn-warning" to="/">
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
