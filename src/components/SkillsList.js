import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
              {/* <th scope="col">ID</th> */}
              <th scope="col">Dummy</th>
              {/* <th scope="col">Skill Type</th> */}
              <th scope="col">Contribution</th>
              <th scope="col">Source</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map((character) => {
              return (
                <tr key={character.id}>
                  {/* <th scope="row">{character.id}</th> */}
                  <td>{character.username}</td>
                  <td>{character.email}</td>

                  <td>{character.password}</td>
                  <td>
                    <Link to={`/characters/${character.id}`}>
                      <i className="far fa-eye m-2"></i>
                      detalhes
                      {/* <i className="fas fa-edit"></i> */}
                    </Link>
                    <Link to={`/character/${character.id}/edit/`}>
                      <i className="fas fa-edit m-2"></i>
                      editar
                    </Link>
                    <Link to={`/character/${character.id}/delete/`}>
                      <i
                        style={{ color: "red" }}
                        className="fas fa-trash-alt m-2"
                      ></i>
                      <button type="submit" className="btn btn-primary">
                        deletar
                      </button>
                    </Link>
                  </td>
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
