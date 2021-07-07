import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function SelectForm(props){
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
          <option value="0">0 = Baby Dummy - What the hell is it? </option>
          <option value="1">1 = Novice (or Dummy): I have a basic understanding of this competence</option>
          <option value="2">2 = Advanced beginner: I can demonstrate this competence under supervision and help other dummies! </option>
          <option value="3">3 = Competent: I can demonstrate this competence independently (A Dummy Master!) </option>
          <option value="4">4 = Proficient: I can supervise other people in this competence (A baby Rudá) </option>
          <option value="5">5 = Expert: I develop new ways of applying this competence (You can apply for an Ironhack TA!)</option>
        </select>

      </div>
    );
  }
  
  export default SelectForm;

          // <div className="form-group">
          //   <label htmlFor="exampleCheck1">Nationality</label>
          //   <select
          //     className="form-control"
          //     name="nationality"
          //     onChange={this.handleChange}
          //     value={this.state.nationality}
          //   >
          //     <option value="de">German</option>
          //   </select>
          // </div> 