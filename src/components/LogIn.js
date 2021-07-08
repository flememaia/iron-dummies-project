import React from 'react';
import axios from 'axios';

import InputForm from '../InputForm';

class LogIn extends React.Component {
    state = {
        username:"",
        email: "",
        password: "",
        pontuaction: "",
        id: "",
    }

    // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
    handleSubmit = (event, prevState) => {
        event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

        axios
        .get(`https://sao-ironrest.herokuapp.com/findOne/grupo7_irondummies?username=${this.state.username}`)
        .then((response) => {
            console.log(response.data);

        if (response.data.password === this.state.password){
                this.props.history.push(`/home/${response.data._id}`); // DIRECIONA PARA HOME COM O id do usuário + PONTUATION + RANKING
                } 

        })
        .catch((err) => {
            console.log(err);
        });
    };

    render(){
        return(
            <div>
                <h1>Componente login</h1>
                <h1 className="my-5">Log In</h1>
                <p>ARRUMR O TEXTO</p>
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
                        label="Enter a strong password"
                        type="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}

export default LogIn