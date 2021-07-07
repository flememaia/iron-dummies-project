import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function SelectFormTest(props){
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
          {/* prop array opções  */}
          {props.arrayOptions.map((eachOption, index) => {
            return (
              <option value={index}>{eachOption}</option>
            )
          })}
        </select>
      </div>
    );
  }
  
  export default SelectFormTest;