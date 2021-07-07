import React, { Component } from "react";

import axios from "axios";

// Delete cruD

class DeleteContribution extends Component {
  componentDidMount = async () => {
    try {
      const response = await axios.delete(
        `https://sao-ironrest.herokuapp.com/grupo7_irondummies/${this.props.match.params.id}`
      );
      this.props.history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div
        className="spinner-border d-flex justify-content-center m-5"
        role="status"
      >
        <span className="visually-hidden"></span>
      </div>
    );
  }
}

export default DeleteContribution;