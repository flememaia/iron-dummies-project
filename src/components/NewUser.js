import React from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import InputForm from '../InputForm';

class NewUser extends React.Component {
    state = {
        username:"",
        email: "",
        password: "",
        points: 0,
        web_skills: "",
        functions: 0,
        basic_algorithms: 0,
        data_types: 0,
        oop_basics: 0,
        dom: 0,
        event_handling: 0,
        component_development: 0,
        state_management: 0,
        props: 0,                
        frontend_routing: 0,         
        api_integration: 0,       
        lifting_stateup: 0,
        database_managment: 0,
        plan_and_model_database: 0,  
        implement_restful_apis: 0,
        security_basics: 0,
        persistente_login: 0       
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
                <Navbar />
                <div className="my-3">
                    <h1>Welcome!</h1>
                    <h2>First of all, let´s create your account!</h2>
                </div>
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