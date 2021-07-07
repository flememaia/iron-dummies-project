import React, { Component } from "react";
import axios from "axios";

// READ do cRud - Mostra o que foi postado pelo usuário com detalhes

class ContributionDetails extends Component {
  state = {
    element: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ element: { ...response.data } });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        <h1>{this.state.element.name} Details</h1>

        <span>
          <strong>Username </strong>
          {this.state.element.username}
        </span>
        <span>
          <strong>Contribution</strong>
          {this.state.element.contribution}
        </span>
        <span>
          <strong>Source</strong>
          {this.state.element.source}
        </span>
      </div>
    );
  }
}

export default ContributionDetails;
