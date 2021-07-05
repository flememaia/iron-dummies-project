import React from 'react';
import axios from 'axios';

import InputForm from '../InputForm';

class EditSkills extends React.Component {
    state = {
        functions: 0,
        basic_algorithms: 0,
        data_types: 0,
        oop_basics: 0,
        dom: 0,
        functional_programming: 0,
        database_managment: 0,
        plan_and_model_database: 0
    }

    // Em formulários de edição, sempre precisamos primeiramente carregar os dados que já existem para dar ao usuário a possibiliadde de alterá-los. Por isso fazemos uma requisição GET e populamos o state.
    componentDidMount = async () => {
        try {
        const id = this.props.match.params.id; // Parâmetro de rota injetado pelo componente Route

        const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${id}`);

        this.setState({ ...response.data });
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
            const id = this.props.match.params.id;

            event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

            axios
            .post(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${id}`, this.state)
            .then((response) => {
                console.log(response);
                this.props.history.push("/"); // // DIRECIONA PARA MESMA HOME COM O NOME DO USUÁRIO + PONTUATION + RANKING
            })
            .catch((err) => {
                console.log(err);
            });
        };

    render(){
        return(
            <div>
                <h1>Web Dev Skills Levels</h1>
                <p>ARRUMR O TEXTO</p>
                <form onSubmit={this.handleSubmit}>
                    <InputForm 
                        label="Functions"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.functions}
                        name="functions"
                        required
                    />
                    <InputForm 
                        label="Basic Algorithms"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.basic_algorithms}
                        name="basic_algorithms"
                        required
                    />
                    <InputForm 
                        label="Data Types"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.data_types}
                        name="data_types"
                        required
                    />
                    <InputForm 
                        label="OOP Basics"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.oop_basics}
                        name="oop_basics"
                        required
                    />
                    <InputForm 
                        label="DOM"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.dom}
                        name="dom"
                        required
                    />
                    <InputForm 
                        label="Functional Programming"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.functional_programming}
                        name="functional_programming"
                        required
                    />
                    <InputForm 
                        label="Database Managment"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.database_managment}
                        name="database_managment"
                        required
                    />
                    <InputForm 
                        label="Plan and Model Database"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.plan_and_model_database}
                        name="plan_and_model_database"
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

export default EditSkills