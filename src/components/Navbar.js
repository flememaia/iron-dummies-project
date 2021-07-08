import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/h">
        IronDummies
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/forumbasics">
              Basics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forumfrontend">
              WebDev Front
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forumbackend">
              WebDev Back
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forumhavenoidea">
              Have no idea
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Track Your Progress
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to={`/updateskills/${props.id}`}>
                Update Your Skills M1!
              </Link>
              <Link
                className="dropdown-item"
                to={`/updateskills_m2/${props.id}`}
              >
                Update Your Skills M2!
              </Link>
              <Link
                className="dropdown-item"
                to={`/updateskills_m3/${props.id}`}
              >
                Update Your Skills M3!
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
