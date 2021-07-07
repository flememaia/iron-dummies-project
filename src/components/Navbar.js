import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/h">
        IronDummies
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              Track Your Progress <span class="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Basics
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">
                Functions
              </Link>
              <Link className="dropdown-item" to="#">
                Basic Algorithms
              </Link>
              <Link className="dropdown-item" to="#">
                Data Types
              </Link>
              <Link className="dropdown-item" to="#">
                OOP Basics
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              WebDev Front
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">
                DOM
              </Link>
              <Link className="dropdown-item" to="#">
                Event Handling
              </Link>
              <Link className="dropdown-item" to="#">
                Component Development
              </Link>
              <Link className="dropdown-item" to="#">
                State Management
              </Link>
              <Link className="dropdown-item" to="#">
                Props
              </Link>
              <Link className="dropdown-item" to="#">
                Frontend Routing
              </Link>
              <Link className="dropdown-item" to="#">
                API integration
              </Link>
              <Link className="dropdown-item" to="#">
                Lifting Stateup
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              WebDev Back
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">
                Functional Programming
              </Link>
              <Link className="dropdown-item" to="#">
                Database Management
              </Link>
              <Link className="dropdown-item" to="#">
                Plan and Model Database
              </Link>
              <Link className="dropdown-item" to="#">
                Implement Restful API's
              </Link>
              <Link className="dropdown-item" to="#">
                Security Basics
              </Link>
              <Link className="dropdown-item" to="#">
                Persistent Login
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
