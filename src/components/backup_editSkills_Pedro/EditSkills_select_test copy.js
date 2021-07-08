import React from 'react';
import axios from 'axios';

import SelectFormTest from '../../SelectFormTest';

class EditSkills_select_test extends React.Component {
    state = {
            web_skills: "basic",
            functions: 0,
            basic_algorithms: 0,
            data_types: 0,
            oop_basics: 0,
            dom: 0,
            functional_programming: 0,
            database_managment: 0,
            plan_and_model_database: 0
        
        // TERMINAR DE PREENCHER PROPRIEDADES
    }

    // Em formulários de edição, sempre precisamos primeiramente carregar os dados que já existem para dar ao usuário a possibiliadde de alterá-los. Por isso fazemos uma requisição GET e populamos o state.
    componentDidMount = async () => {
        try {
         // Atualizar o state com as informações prévias do user já salvas na API (id é o parâmetro de rota). 
         // Caso seja a primeira vez, retorna tudo zero. 
        const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);
            if(this.props.match.params.m > 1){
                this.setState( {
                    functions: response.data.skills[`m${this.props.match.params.m-1}`].functions, 
                    basic_algorithms: response.data.skills[`m${this.props.match.params.m-1}`].basic_algorithms, 
                    data_types: response.data.skills[`m${this.props.match.params.m-1}`].data_types,
                    oop_basics: response.data.skills[`m${this.props.match.params.m-1}`].oop_basics, 
                    dom: response.data.skills[`m${this.props.match.params.m-1}`].dom, 
                    functional_programming: response.data.skills[`m${this.props.match.params.m-1}`].functional_programming, 
                    database_managment: response.data.skills[`m${this.props.match.params.m-1}`].database_managment, 
                    plan_and_model_database: response.data.skills[`m${this.props.match.params.m-1}`].plan_and_model_database    
                } ); 
            }
        
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
            .put(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`, {skills:{[`m${this.props.match.params.m}`]: {...this.state}}})
            .then((response) => {
                console.log(response);
                this.props.history.push(`/home/${this.props.match.params.id}`); // // DIRECIONA PARA MESMA HOME COM O NOME DO USUÁRIO + PONTUATION + RANKING
            })
            .catch((err) => {
                console.log(err);
            });
        };

        renderSkills = () => {
            if (this.state.web_skills === "basic"){
                return (
                    <div>
                        <SelectFormTest 
                        label="Functions"
                        onChange={this.handleChange}
                        value={this.state.functions_m1}
                        name="functions_m1"
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
                        value={this.state.basic_algorithms_m1}
                        name="basic_algorithms_m1"
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
                        value={this.state.data_types_m1}
                        name="data_types_m1"
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
                        value={this.state.oop_basics_m1}
                        name="oop_basics_m1"
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
                <h1>Componente EditSkills_select_test</h1>
                <h1 className="my-5">Web Dev Skills Levels</h1>
                <p>ARRUMR O TEXTO</p>

                {/* ARRUMAR ESSA OPÇÃO */}
                
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleCheck1">Web Dev Skills</label>
                        <select
                            className="form-control"
                            name="web-skills"
                            onChange={this.handleChange}
                            value={this.state.web_skills}
                            >
                            <option value="basic">Basic</option>
                            <option value="front_end">Front-End</option>
                            <option value="back_end">Back-End</option>
                        </select>
                </div>
                    {this.renderSkills()}
                    <SelectFormTest
                        label="DOM"
                        onChange={this.handleChange}
                        value={this.state.dom_m1}
                        name="dom_m1"
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
                        value={this.state.functional_programming_m1}
                        name="functional_programming_m1"
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
                        label="Database Managment"
                        onChange={this.handleChange}
                        value={this.state.database_managment_m1}
                        name="database_managment_m1"
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
                    <button type="submit" className="btn btn-primary">
                        Update my skills M1
                    </button>
                </form>
            </div>
        )
    }
}

export default EditSkills_select_test