import React from 'react';
import axios from 'axios';

import InputForm from '../../InputForm';

class NewUser extends React.Component {
    state = {
        username:"",
        email: "",
        password: "",
        points: 0,
        skills: {
            m1: {
            functions: 0,
            basic_algorithms: 0,
            data_types: 0,
            oop_basics: 0,
            dom: 0,
            functional_programming: 0,
            database_managment: 0,
            plan_and_model_database: 0
            },
            m2: {},
            m3: {}
        }
            // TERMINAR DE PREENCHER PROPRIEDADES
    }

    // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
    handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

        axios
        .post("https://sao-ironrest.herokuapp.com/grupo7_irondummies", this.state)
        .then((response) => {
            console.log(response);
            console.log(response.data.insertedId)
            
            // DEPOIS DE ENVIAR OS DADOS PRA API, RE-DIRECIONA PARA APPLOGGEDIN => <Route exact path="/home/:username" component={AppLogedIn}/>
            this.props.history.push(`/home/${response.data.insertedId}`); 
        })
        .catch((err) => {
            console.log(err);
        });
    };

    render(){
        return(
            <div>
                <h1>Componente NewUser</h1>
                <h1>New Dummy</h1>
                <p>ARRUMR O TEXTO Welcome! xxxxx. First of all, let´s create your account!</p>
                <form onSubmit={this.handleSubmit}>
                    <InputForm 
                        label="Your UserName"
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.username}
                        name="username"
                        required
                    />
                    <InputForm 
                        label="Enter your best email"
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        name="email"
                        required
                    />
                    <InputForm 
                        label="Enter a strong password"
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Create New Account
                    </button>
                </form>
            </div>
        )
    }
}

export default NewUser