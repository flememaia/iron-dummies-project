import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Forum com as colunas preenchidas pelos usuários

class SkillsList extends Component {
  state = {
    characters: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://sao-ironrest.herokuapp.com/grupo7_irondummies"
      );
      console.log(response);
      this.setState({ characters: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container my-5">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Dummy</th>
              <th scope="col">Skill Type</th>
              <th scope="col">Contribution Type</th>
              <th scope="col">Contribution</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map((character) => {
              return (
                <tr key={character.id}>
                  <th scope="row">{character.id}</th>
                  <td>{character.dummy}</td>
                  <td>{character.skillType}</td>
                  <td>{character.contributionType}</td>
                  <td>{character.contribution}</td>
                  <td>{character.source}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SkillsList;
