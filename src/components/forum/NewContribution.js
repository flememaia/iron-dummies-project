import React from "react";
import axios from "axios";

import InputForm from "../../InputForm";
import SelectFormForum from "../../SelecFormForum";

class NewContribution extends React.Component {
  state = {
    id_user: this.props.match.params.id,
    // username: "",
    username_cont:"",
    contribution: "",
    skilltype: "",
    source: "",
  };

  // Em formulários de edição, sempre precisamos primeiramente carregar os dados que já existem para dar ao usuário a possibiliadde de alterá-los. Por isso fazemos uma requisição GET e populamos o state.
//   componentDidMount = async () => {
//     try {
//      // Atualizar o state com as informações prévias do user já salvas na API (id é o parâmetro de rota). 
//      // Caso seja a primeira vez, retorna tudo zero. 
//     const response = await axios.get(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`);

//     this.setState( {
//         username: response.data.username, 
//     } ); 
//     //Não pode usar [...response.data] para atualizar o state porque atualizaria também o _id e 
//     // daria erro. Portanto, colocar apenas as propriedades que estão sendo atualizadas.
//         } catch (err) {
//     console.log(err);
//     }
// };

  // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
  handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

    axios
      // .put(`https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`, this.state)
      .post(`https://sao-ironrest.herokuapp.com/grupo7_irondummies`, this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push(`/home/${this.props.match.params.id}`); // DIRECIONA PARA HOME COM O NOME DO USUÁRIO + PONTUATION + RANKING
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeIdea = () => {
    this.props.history.push(`/home/${this.props.match.params.id}`);
  }

  render() {
    return (
      <div className="container my-5">
        <h1>Your Contribution</h1>
        <p>Feel free to type whatever you want. We are all dummies!</p>
        <i>*mandatory fields</i>
        <br/>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            label="Username*"
            type="text"
            onChange={this.handleChange}
            value={this.state.username_cont}
            name="username_cont"
            required
          />
          <InputForm
            label="Contribution*"
            type="text"
            onChange={this.handleChange}
            value={this.state.contribution}
            name="contribution"
            required
          />
          <SelectFormForum
            label="Skill Type"
            onChange={this.handleChange}
            value={this.state.skilltype}
            name="skilltype"
          />
          <InputForm
            label="Source"
            type="text"
            onChange={this.handleChange}
            value={this.state.source}
            name="source"
          />
          <div className="d-flex justify-content-between mx-2">
            <button type="submit" className="btn btn-success">
              <i class="fas fa-check-square m-2"></i>
            </button>
            <button className="btn btn-danger" onClick={this.changeIdea}>
              <i class="fas fa-trash-alt m-2"></i>
            </button>
          </div>
        </form>
          
      </div>
    );
  }
}

export default NewContribution;
