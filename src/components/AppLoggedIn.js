import React from "react"
import { Link } from 'react-router-dom'
import SkillsList from "./SkillsList"

class AppLogedIn extends React.Component{
    state = {
        _id: ""
    }

    componentDidMount = () => {
        this.setState({_id: this.props.match.params.id})
    }

    render(){
        return(
            <div>
                <h1>Página Logada! </h1>
                <h2>PUXAR O NOME DO USUÁRIO</h2>
                <h2>PUXAR A PONTUAÇÃO</h2>
                {/* Botão que direciona para atualizar as skills */}
                {/* <Route path="/updateskills/:username" component={EditSkills}/> */}
                <Link to={`/updateskills/${this.state._id}`}>
                    <buton className="btn btn-primary">
                        Update Your Skills!
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