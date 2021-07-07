import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SelectFormForum(props) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        id={props.id}
        className="form-control"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      >
        <option value="0">Basics</option>
        <option value="1">WebDev Front</option>
        <option value="2">WebDev Back</option>
        <option value="3">Have no idea</option>
      </select>
    </div>
  );
}

export default SelectFormForum;
