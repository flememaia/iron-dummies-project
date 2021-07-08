import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Forum com as colunas preenchidas pelos usuários

class ForumList extends Component {
  state = {
    _id: "",
    username: "",
    points: "",
    allUsers: []
    // username: "",
    // contribution: "",
    // skillstype: "",
    // source: ""
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://sao-ironrest.herokuapp.com/grupo7_irondummies"
      );
      console.log(response);
      this.setState({ allUsers: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <div className="alert alert-secondary mt-5" role="alert">
          <strong>Help me!</strong>
          <br />
          <strong>Basics</strong> - Functions / Basic Algorithms / Data Types /
          OOP Basics / Functional Programming
          <br />
          <strong>WebDev Front</strong> - DOM / Event Handling / Component
          Development / State Management / Props / Frontend Routing / API
          integration / Lifting Stateup
          <br />
          <strong>WebDev Back</strong> - Database / Management / Plan and Model
          Database / Implement Restful API's / Security Basics / Persistent
          Login
          <br />
        </div>

        {/* <Link to={`/newcontribution/${this.state._id}`}>
                    <buton className="btn btn-primary">
                        New Contribution!
                    </buton>
        </Link> */}

        {/* <div className="container container-md mt-5">*/}
        <div className="container container-md mt-5 table-responsive-md">
          <table className="table table-striped table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col col-md-1">Dummy</th>
                <th scope="col col-md-1">Contribution</th>
                <th scope="col col-md-1">Skill Type</th>
                {/* <th scope="col col-md-1">Source</th> */}
                <th scope="col col-md-1"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.allUsers.map((user, index) => {
                return (
                  <tr key={index}>
                    {/* <td>{user._id}</td> */}
                    <td>{user.username_cont}</td>
                    <td>{user.contribution}</td>
                    <td>{user.skilltype}</td>
                    {/* <td>{user.source}</td> */}
                    <td>
                      {/* ALTEREI DE user.index para user.id */}
                      <Link to={`/contributiondetails/${user._id}`}>
                        <i className="far fa-eye m-2"></i>
                      </Link>
                      <Link to={`/editcontribution/${user._id}`}>
                        <i className="fas fa-edit m-2" alt="Edit"></i>
                      </Link>
                      <Link to={`/deletecontribution/${user._id}`}>
                        <i
                          style={{ color: "red" }}
                          className="fas fa-trash-alt m-2"
                        ></i>
                      </Link>
                      <button to="/">
                        0
                        <i
                          style={{ color: "#F9A602" }}
                          className="fas fa-star"
                        ></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ForumList;
