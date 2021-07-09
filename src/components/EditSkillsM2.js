import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SelectFormTest from '../SelectFormTest';

class EditSkillsM2 extends React.Component {
    state = {
        web_skills: "",
        functions_m2: 0,
        basic_algorithms_m2: 0,
        data_types_m2: 0,
        oop_basics_m2: 0,
        functional_programming_m2: 0,
        dom_m2: 0,
        event_handling_m2: 0,
        component_development_m2: 0,
        state_management_m2: 0,
        props_m2: 0,                
        frontend_routing_m2: 0,         
        api_integration_m2: 0,       
        lifting_stateup_m2: 0,
        database_managment_m2: 0,
        plan_and_model_database_m2: 0,  
        implement_restful_apis_m2: 0,
        security_basics_m2: 0,
        persistente_login_m2: 0     
    }

    // Em formulários de edição, sempre precisamos primeiramente carregar os dados que já existem para dar ao usuário a possibiliadde de alterá-los. Por isso fazemos uma requisição GET e populamos o state.
    componentDidMount = async () => {
        try {
         // Atualizar o state com as informações prévias do user já salvas na API (id é o parâmetro de rota). 
         // Caso seja a primeira vez, retorna tudo zero. 
        const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);

        this.setState( {
            functions_m2: response.data.functions_m1, 
            basic_algorithms_m2: response.data.basic_algorithms_m1, 
            data_types_m2: response.data.data_types_m1,
            oop_basics_m2: response.data.oop_basics_m1, 
            functional_programming_m2: response.data.functional_programming_m1, 
            dom_m2: response.data.dom_m1, 
            event_handling_m2: response.data.event_handling_m1,
            component_development_m2: response.data.component_development_m1,
            state_management_m2: response.data.state_management_m1,
            props_m2: response.data.props_m1,          
            frontend_routing_m2: response.data.frontend_routing_m1,        
            api_integration_m2: response.data.api_integration_m1,     
            lifting_stateup_m2: response.data.lifting_stateup_m1,
            database_managment_m2: response.data.database_managment_m1, 
            plan_and_model_database_m2: response.data.plan_and_model_database_m1,
            implement_restful_apis_m2: response.data.implement_restful_apis_m1,
            security_basics_m2: response.data.security_basics_m1,
            persistente_login_m2: response.data.persistente_login_m1    
        } ); 
        //Não pode usar [...response.data] para atualizar o state porque atualizaria também o _id e 
        // daria erro. Portanto, colocar apenas as propriedades que estão sendo atualizadas.
            } catch (err) {
        console.log(err);
        }
    };

        // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
        handleChange = (event) =>{
            this.setState({ [event.target.name]: event.target.value })
        }

        // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
        handleSubmit = (event) => {
            // const id = this.props.match.params.id;

            event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

            axios
            .put(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`, this.state)
            .then((response) => {
                console.log(response);
                this.props.history.push(`/home/${this.props.match.params.id}`); // // DIRECIONA PARA MESMA HOME COM O NOME DO USUÁRIO + PONTUATION + RANKING
            })
            .catch((err) => {
                console.log(err);
            });
        };

    renderSkills = () => {
        if(this.state.web_skills === "basic"){
            return (
                <div>
                <SelectFormTest 
                        label="Functions"
                        onChange={this.handleChange}
                        value={this.state.functions_m2}
                        name="functions_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Basic Algorithms"
                        onChange={this.handleChange}
                        value={this.state.basic_algorithms_m2}
                        name="basic_algorithms_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Data Types"
                        onChange={this.handleChange}
                        value={this.state.data_types_m2}
                        name="data_types_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="OOP Basics"
                        onChange={this.handleChange}
                        value={this.state.oop_basics_m2}
                        name="oop_basics_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Functional Programming"
                        onChange={this.handleChange}
                        value={this.state.functional_programming_m2}
                        name="functional_programming_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    /> 
            </div>
            )
        }
        else if(this.state.web_skills === "front_end"){
            return (
                <div>
                    <SelectFormTest
                        label="DOM"
                        onChange={this.handleChange}
                        value={this.state.dom_m2}
                        name="dom_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                        <SelectFormTest
                        label="Event Handling"
                        onChange={this.handleChange}
                        value={this.state.event_handling_m2}
                        name="event_handling_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                        <SelectFormTest
                        label="Component Development"
                        onChange={this.handleChange}
                        value={this.state.component_development_m2}
                        name="component_development_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="State Management"
                        onChange={this.handleChange}
                        value={this.state.state_management_m2}
                        name="state_management_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Props"
                        onChange={this.handleChange}
                        value={this.state.props_m2}
                        name="props_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Frontend Routing"
                        onChange={this.handleChange}
                        value={this.state.frontend_routing_m2}
                        name="frontend_routing_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="API integration"
                        onChange={this.handleChange}
                        value={this.state.api_integration_m2}
                        name="api_integration_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                        <SelectFormTest
                        label="Lifting Stateup"
                        onChange={this.handleChange}
                        value={this.state.lifting_stateup_m2}
                        name="lifting_stateup_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
            </div>
            )
        }
        else if(this.state.web_skills === "back_end"){
            return (
                <div>
                    <SelectFormTest
                        label="Database Managment"
                        onChange={this.handleChange}
                        value={this.state.database_managment_m2}
                        name="database_managment_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Plan and Model Database"
                        onChange={this.handleChange}
                        value={this.state.plan_and_model_database_m2}
                        name="plan_and_model_database_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Implement Restful API´s"
                        onChange={this.handleChange}
                        value={this.state.implement_restful_apis_m2}
                        name="implement_restful_apis_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Security Basics"
                        onChange={this.handleChange}
                        value={this.state.security_basics_m2}
                        name="security_basics_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
                    <SelectFormTest
                        label="Persistente Login"
                        onChange={this.handleChange}
                        value={this.state.persistente_login_m2}
                        name="persistente_login_m2"
                        required
                        arrayOptions={[
                            "0 = Baby Dummy - What the hell is it?",
                            "1 = Novice (or Dummy): I have a basic understanding of this competence",
                            "2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies!",
                            "3 = Competent: I can demonstrate this competence independently (A Dummy Master!)",
                            "4 = Proficient: I can supervise other people in this competence (A baby Rudá)",
                            "5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)"
                        ]}
                    />
            </div>
            )
        }
    }

    render(){
        return(
            <div>
                {/* <Navbar id={this.state_id}/> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to={`/home/${this.state._id}`}>
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
                <div className="my-5">
                    <h1>Web Dev Skills Levels - Module 2</h1>
                    <h2>Update your skills according to module.</h2>
                    <h2>Take your time and don't lie!</h2>
                </div>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Web Dev Skills</label>
                            <select
                                className="form-control"
                                name="web_skills"
                                onChange={this.handleChange}
                                value={this.state.web_skills}
                                >
                                <option value="">Please choose an option</option>
                                <option value="basic">Basic</option>
                                <option value="front_end">Front-End</option>
                                <option value="back_end">Back-End</option>
                            </select>
                    </div>
                        {this.renderSkills()}
                    
                    <button type="submit" className="btn btn-primary">
                        Update my skills M2
                    </button>
                </form>
            </div>
        )
    }
}

export default EditSkillsM2