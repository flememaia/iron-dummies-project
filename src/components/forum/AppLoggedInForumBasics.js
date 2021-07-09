import React from "react"
import { Link } from "react-router-dom";
import ForumListBasics from "./ForumListBasics";
// import Navbar from "./Navbar";

import axios from "axios"

class AppLoggedInForumBasics extends React.Component{
    state = {
        _id: "",
        username: "",
        points: ""
    }

    componentDidMount = async () => {
        try {
         // Atualizar o state com as informações prévias do user já salvas na API (id é o parâmetro de rota). 
        const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);

        this.setState( {_id: this.props.match.params.id, 
            username: response.data.username,
            points: response.data.points
        } ); 

            } catch (err) {
        console.log(err);
        }
    };

    render(){
        return(
            <div>
                {/* <Navbar id={this.state_id}/> */}
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
                            <Link className="dropdown-item" to={`/updateskills/${this.state._id}`}>
                                Update Your Skills M1!
                            </Link>
                            <Link
                                className="dropdown-item"
                                to={`/updateskills_m2/${this.state._id}`}
                            >
                                Update Your Skills M2!
                            </Link>
                            <Link
                                className="dropdown-item"
                                to={`/updateskills_m3/${this.state._id}`}
                            >
                                Update Your Skills M3!
                            </Link>

                            <Link 
                                className="dropdown-item"
                                to={`/chart/${this.state._id}`}
                            >
                                Generate Your Report
                            </Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>
                <h1>Welcome, {this.state.username}!</h1>
                <h2>Feel free to browse the community forum, your dumb question might be the same as mine!</h2>
                {/* <h2>You have {this.state.points} points!</h2> */}

                <Link to={`/newcontribution/${this.state._id}`}>
                    <buton className="btn btn-primary">
                        New Contribution!
                    </buton>
                </Link>
                
                < ForumListBasics/>
            </div>
        )
    }
}

export default AppLoggedInForumBasics
