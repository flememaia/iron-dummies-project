import React from "react"
import { Link, NavLink } from "react-router-dom";
import SkillsList from "./forum/SkillsList"
import Navbar from "./Navbar";

import axios from "axios"

class AppLogedIn extends React.Component{
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
                <Navbar id={this.state_id} />
{/* 
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
                        
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Track Your Progress
                                </Link>
                                <ul className="dropdownMenu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdownItem" to={`/updateskills/${this.state._id}`}>Module 1 - Update Your Skills</Link></li>
                                    <li><Link className="dropdownItem" to={`/updateskills_m2/${this.state._id}`}>Module 2 - Update Your Skills</Link></li>
                                    <li><Link className="dropdownItem" to={`/updateskills_m3/${this.state._id}`}>Module 3 - Update Your Skills</Link></li>
                                    <li><hr className="dropdownDivider"/></li>
                                    <li><Link className="dropdownItem" to={`/chart/${this.state._id}`}>Generate Your Report</Link></li>
                                </ul>
                            </li>
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
                    </nav> */}
                <h1>Componente AppLoggedIn</h1>
                <h2>Welcome, {this.state.username}!</h2>
                {/* <h2>You have {this.state.points} points!</h2> */}
                {/* Fórum com contribuições etc */}
                < SkillsList/>
            </div>
        )
    }
}

export default AppLogedIn
// 1. Contributions
// 2. Atualizar Skill
// 3. Visualizar progresso...SkillsList.