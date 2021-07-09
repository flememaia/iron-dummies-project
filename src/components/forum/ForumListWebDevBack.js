import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Forum com as colunas preenchidas pelos usuários

class ForumListWebDevBack extends Component {
  state = {
    _id: "",
    username: "",
    points: "",
    counter: 1,
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
      console.log(response.data);
      
      const newResponse = []
      response.data.map(object => {
         if(object.contribution !== undefined){
            newResponse.push(object)
         }
         return newResponse
      })
      console.log(newResponse)

      const newResponseWebDevBack = []
      newResponse.map(object => {
        if(object.skilltype === "WebDev Back"){
          newResponseWebDevBack.push(object)
        }
        return newResponseWebDevBack   
      })
      console.log(newResponseWebDevBack)
      this.setState({ allUsers: [...newResponseWebDevBack] });
    } catch (err) {
      console.error(err);
    }
  };

  // handleLikes = () => {
  //   this.setState({ counter: this.state.counter + 1})
  // }

  // renderPages = () => {
  //   if(this.allUsers.skilltype === "Basics"){

  //   }
  //    
  //       "Have no idea"
  // }

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
                      {/* <button onClick={this.handleLikes}>
                        {this.state.counter}
                        <i
                          style={{ color: "#F9A602" }}
                          className="fas fa-star"
                        ></i>
                      </button> */}
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

export default ForumListWebDevBack;
