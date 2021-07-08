import React, { Component } from "react";
import axios from "axios";

// READ do cRud - Mostra o que foi postado pelo usuário com detalhes

class ContributionDetails extends Component {
  state = {
    id_user:"",
    username_cont:"",
    contribution: "",
    skilltype: "",
    source: "",
  };

  componentDidMount = async () => {
    try {
      //parâmetro de rota é o id da contribuição
      const response = await axios.get(
        `https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ 
        id_user: response.data.id_user,
        username_cont: response.data.username_cont,
        contribution: response.data.contribution,
        skilltype: response.data.skilltype,
        source: response.data.source
      });
    } catch (err) {
      console.error(err);
    }
  };

  //botão voltar pra página anterior
  changeIdea = () => {
    this.props.history.push(`/home/${this.state.id_user}`);
  }

  render() {
    return (
      <div>
        <div className="container d-flex flex-column">
          <h1>Details</h1>
          <span>
            <strong>Dummy responsible for the contribution: </strong>
            {this.state.username_cont}
          </span>
          <span>
            <strong>Contribution: </strong>
            {this.state.contribution}
          </span>
          <span>
            <strong>Source: </strong>
            {this.state.source}
          </span>
        </div>

        <button className="btn btn-danger" onClick={this.changeIdea}>
          VOLTAR
        </button>
      </div>
    );
  }
}

export default ContributionDetails;
