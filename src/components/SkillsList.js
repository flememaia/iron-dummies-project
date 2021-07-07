import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Forum com as colunas preenchidas pelos usuários

class SkillsList extends Component {
  state = {
    allUsers: []
    // username: "",
    // contribution: "",
    // source: ""
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://sao-ironrest.herokuapp.com/grupo7_irondummies"
      );
      console.log(response);
      this.setState({allUsers: [...response.data]});
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container container-md my-5">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col col-md-2">Dummy</th>
              <th scope="col col-md-2">Contribution</th>
              <th scope="col col-md-2">Source</th>
              <th scope="col col-md-2"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((user, index) => {
              return(
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.contribution}</td>
                  <td>{user.source}</td>
                  <td>
                    <Link to={`/`}>
                      <i className="far fa-eye m-2"></i>
                    </Link>
                    <Link to={`//`}>
                      <i className="fas fa-edit m-2"></i>
                    </Link>
                    <Link to={`/`}>
                      <i
                        style={{ color: "red" }}
                        className="fas fa-trash-alt m-2"
                      ></i>
                    </Link>
                  </td>
                </tr>
              )
            })}
                
          </tbody>
        </table>
      </div>
    );
  }
}

export default SkillsList;
