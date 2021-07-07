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
          <Link className="nav-link" to="/forumbasics">
            Basics
          </Link>
          <Link className="nav-link" to="/forumfrontend">
            WebDev Front
          </Link>
          <Link className="nav-link" to="/forumbackend">
            WebDev Back
          </Link>
          <Link className="nav-link" to="/forumhavenoidea">
            Have no idea
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
