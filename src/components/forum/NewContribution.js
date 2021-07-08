import React from "react";
import axios from "axios";

import InputForm from "../../InputForm";
import SelectFormForum from "../../SelecFormForum";

class NewContribution extends React.Component {
  state = {
    username: "",
    contribution: "",
    skilltype: "",
    source: "",
  };

  // Atualizar o state com o valor interno do input quando o usuário dispara o evento 'change'
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Envia os dados para a API quando acontece o evento 'submit', que é disparado quando o usuário aciona um botão com 'type' submit dentro de um formulário
  handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão dos formulários, que é recarregar a página e enviar os dados através da URL

    axios
      .post("https://sao-ironrest.herokuapp.com/grupo7_irondummies", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/"); // DIRECIONA PARA HOME COM O NOME DO USUÁRIO + PONTUATION + RANKING
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="container my-5">
        <h1>Your Contribution</h1>
        <p>Feel free to type whatever you want. We are all dummies!</p>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            label="Username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
            name="username"
            required
          />
          <InputForm
            label="Contribution"
            type="text"
            onChange={this.handleChange}
            value={this.state.contribution}
            name="contribution"
            required
          />
          <SelectFormForum
            label="Skill Type"
            type="text"
            onChange={this.handleChange}
            value={this.state.source}
            name="source"
            required
          />
          <InputForm
            label="Source"
            type="text"
            onChange={this.handleChange}
            value={this.state.source}
            name="source"
            required
          />

          <button type="submit" className="btn btn-primary">
            Submit New Post
          </button>
          <button type="submit" className="btn btn-primary ml-3">
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default NewContribution;
