import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SelectFormForum(props) {
  return (
    <div className="form-group mb-3">
      <label htmlFor={props.id}><strong>{props.label}</strong></label>
      <select
        id={props.id}
        className="form-control"
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        required={props.required}
      >
        <option value="">Please choose an option</option>
        <option value="Basics">Basics</option>
        <option value="WebDev Front">WebDev Front</option>
        <option value="WebDev Back">WebDev Back</option>
        <option value="Have no idea">Have no idea</option>
      </select>
    </div>
  );
}

export default SelectFormForum;
