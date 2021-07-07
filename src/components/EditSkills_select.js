import React from 'react';
import axios from 'axios';

import SelectForm from '../SelectForm';

class EditSkills_select extends React.Component {
    state = {
        web_skills: "",
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

        this.setState( {
            functions: response.data.functions, 
            basic_algorithms: response.data.basic_algorithms, 
            data_types: response.data.data_types,
            oop_basics: response.data.oop_basics, 
            dom: response.data.dom, 
            functional_programming: response.data.functional_programming, 
            database_managment: response.data.database_managment, 
            plan_and_model_database: response.data.plan_and_model_database    
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

    render(){
        return(
            <div>
                <h1 className="my-5">Web Dev Skills Levels</h1>
                <p>ARRUMR O TEXTO</p>

                {/* ARRUMAR ESSA OPÇÃO */}
                {/* <div className="form-group">
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
                        </select> */}
                <form onSubmit={this.handleSubmit}>
                    <SelectForm 
                        label="Functions"
                        onChange={this.handleChange}
                        value={this.state.functions}
                        name="functions"
                        required
                    />
                    <SelectForm 
                        label="Basic Algorithms"
                        onChange={this.handleChange}
                        value={this.state.basic_algorithms}
                        name="basic_algorithms"
                        required
                    />
                    <SelectForm 
                        label="Data Types"
                        onChange={this.handleChange}
                        value={this.state.data_types}
                        name="data_types"
                        required
                    />
                    <SelectForm 
                        label="OOP Basics"
                        onChange={this.handleChange}
                        value={this.state.oop_basics}
                        name="oop_basics"
                        required
                    />
                    <SelectForm 
                        label="DOM"
                        onChange={this.handleChange}
                        value={this.state.dom}
                        name="dom"
                        required
                    />
                    <SelectForm 
                        label="Functional Programming"
                        onChange={this.handleChange}
                        value={this.state.functional_programming}
                        name="functional_programming"
                        required
                    />
                    <SelectForm 
                        label="Database Managment"
                        onChange={this.handleChange}
                        value={this.state.database_managment}
                        name="database_managment"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Update my skills
                    </button>
                </form>
            </div>
        )
    }
}

export default EditSkills_select