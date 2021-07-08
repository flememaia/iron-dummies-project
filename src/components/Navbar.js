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

{/* LINKS PARA ATUALIZAR E GERAR GRÁFICO
SUBSTITUIR props.id
<div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`/chart/${this.state._id}`}>
                            Track Your Progress <span class="sr-only">(current)</span>
                            </Link>
                            <Link to={`/updateskills/${this.state._id}`}>                   
                            Update Your Skills M1!
                            </Link>

                            <Link to={`/updateskills_m2/${this.state._id}`}>
                            Update Your Skills M2!
                            </Link>

                            <Link to={`/updateskills_m3/${this.state._id}`}>
                            Update Your Skills M3!
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Track Your Progress
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to={`/updateskills/${this.state._id}`}>Module 1 - Update Your Skills</Link></li>
                                <li><Link className="dropdown-item" to={`/updateskills_m2/${this.state._id}`}>Module 2 - Update Your Skills</Link></li>
                                <li><Link className="dropdown-item" to={`/updateskills_m3/${this.state._id}`}>Module 3 - Update Your Skills</Link></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><Link className="dropdown-item" to={`/chart/${this.state._id}`}>Generate Your Report</Link></li>
                            </ul>
                        </li> */}

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
