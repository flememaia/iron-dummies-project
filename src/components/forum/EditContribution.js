import React, { Component } from "react";
import axios from "axios";

import NewContribution from "./NewContribution";

// Update crUd

class EditContribution extends Component {
  state = {
    username: "",
    contribution: "",
    skilltype: "",
    source: "",
    skilltype: ""
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`
      );
      this.setState({ ...response.data });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = (event) => {
    //   this.state[event.target.name] // false
    //   !this.state[event.target.name] // true
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`,
        this.state
      );
      console.log(response);
      this.props.history.push("/");
      //   const win = window.open("/", "_blank");
      //   win.focus();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    // console.log(this.props);
    return (
      <NewContribution
        state={this.state}
        handleChange={this.handleChange}
        handleCheckbox={this.handleCheckbox}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default EditContribution;
