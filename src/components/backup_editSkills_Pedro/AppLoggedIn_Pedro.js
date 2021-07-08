import React from "react"
import { Link } from 'react-router-dom'
import SkillsList from "../SkillsList"

import axios from "axios"

class AppLogedIn extends React.Component{
    state = {
        _id: "",
        username: "",
        points: ""
    }

    // componentDidMount = () => {
    //     this.setState({_id: this.props.match.params.id})
    // }
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
                <h1>Componente AppLoggedIn</h1>
                <h2>Welcome, {this.state.username}!</h2>
                <h2>You have {this.state.points} points!</h2>
                {/* Botão que direciona para atualizar as skills */}
                {/* <Route path="/updateskills/:username" component={EditSkills}/> */}
                <Link to={`/updateskills/${this.state._id}/1`}>
                    <buton className="btn btn-primary">
                        Update Your Skills M1!
                    </buton>
                </Link>

                <Link to={`/updateskills_m2/${this.state._id}/2`}>
                    <buton className="btn btn-primary">
                        Update Your Skills M2!
                    </buton>
                </Link>

                <Link to={`/chart/${this.state._id}`}>
                    <buton className="btn btn-danger">
                        Generate Skill Report!
                    </buton>
                </Link>

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