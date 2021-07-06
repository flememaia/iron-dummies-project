import React, { Component } from "react";
import axios from "axios";

// READ do cRud - Mostra o que foi postado pelo usuário com detalhes

class ContributionDetails extends Component {
  state = {
    character: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ character: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        <h1>{this.state.character.name} Details</h1>

        <span>
          <strong>Username </strong>
          {this.state.character.dummy}
        </span>
        <span>
          <strong>Contribution</strong>
          {this.state.character.contribution}
        </span>
        <span>
          <strong>Source</strong>
          {this.state.character.source}
        </span>
      </div>
    );
  }
}

export default ContributionDetails;
