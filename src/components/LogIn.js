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
        allUsers: []
    }

    // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
    handleSubmit = (event, prevState) => {
        event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

        axios
        .get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies`)
        .then((response) => {
            console.log(response.data);

            this.setState({allUsers: [...response.data]})
            console.log(this.state.allUsers)

            // this.state.allUsers.map(user => {
            //     if(this.state.username === user.username){
            //         this.setState({ id: response._id})
            //          console.log(this.state.id)
            //          this.props.history.push(`/home/${this.state.id}`); // DIRECIONA PARA HOME COM O id do usuário + PONTUATION + RANKING
            //     }
            // })
            for (let i = 0; i < this.state.allUsers.length; i++){
                if(prevState.username === this.state.allUsers[i].username){
                    this.setState({ id: this.state.allUsers[i]._id})
                    console.log(this.state.id)
                    this.props.history.push(`/home/${this.state.id}`); // DIRECIONA PARA HOME COM O id do usuário + PONTUATION + RANKING
                }
            }  

            // for (let i = 0; i < response.length; i++){
            //     if(prevState.username === response.username){
            //         this.setState({ id: response._id})
            //         console.log(this.state.id)
            //         this.props.history.push(`/home/${this.state.id}`); // DIRECIONA PARA HOME COM O id do usuário + PONTUATION + RANKING
            //     }
            // }     
        })
        .catch((err) => {
            console.log(err);
        });
    };

    render(){
        return(
            <div>
                <h1>Log In</h1>
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