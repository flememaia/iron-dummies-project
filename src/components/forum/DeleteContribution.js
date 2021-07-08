import React from "react";
import axios from "axios";

import InputForm from "../../InputForm";
import SelectFormForum from "../../SelecFormForum";

class DeleteContribution extends React.Component {
  state = {
    id_user:"",
    username_cont:"",
    contribution: "",
    skilltype: "",
    source: "",
  };

  // Neste caso, precisamos carregar os dados para conseguir resgatar o id_user e poder retornar para a página logada
  // depois de deletar. Então, vou aproveitar e trazer todas as infromações para confirmar se realmente quer deletar. 
  
  componentDidMount = async () => {
    try {
     // Resgatar o id_user (o parâmetro de rota é o id da contribuição - diferente do id do user, que também foi armazenado na contribuição). 
    const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);
      console.log(response)

    this.setState( {
        id_user: response.data.id_user,
        username_cont: response.data.username_cont,
        contribution: response.data.contribution,
        skilltype: response.data.skilltype,
        source: response.data.source
    } ); 
    //Não pode usar [...response.data] para atualizar o state porque atualizaria também o _id e 
    // daria erro. Portanto, colocar apenas as propriedades que estão sendo atualizadas.
        } catch (err) {
    console.log(err);
    }
};

  // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
  handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

    axios
      .delete(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/home/${this.state.id_user}`); // DIRECIONA PARA HOME COM O NOME DO USUÁRIO + PONTUATION + RANKING
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeIdea = () => {
    this.props.history.push(`/home/${this.state.id_user}`);
  }

  render() {
    return (
      <div className="container my-5">
        <h1>Are you sure you want to delete this contribution?</h1>
        
        <form onSubmit={this.handleSubmit}>
          <div className="d-flex flex-column aling-items-center">
            <p><strong>Contribution: </strong>{this.state.contribution}</p>
            <p><strong>Skill Type: </strong>{this.state.skilltype}</p>
            <p><strong>Source: </strong>{this.state.source}</p>
          </div>
          
          <div className="d-flex justify-content-between mx-2">
            <button type="submit" className="btn btn-danger">
            <i class="fas fa-trash-alt m-2"></i>
            </button>
            <button className="btn btn-primary" onClick={this.changeIdea}>
              RETURN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DeleteContribution;
