import React from "react"
import SkillList from "./SkillList";


function TechnicalSkillsetForm() {
    return (
      <>
          <select>
            <option value="skills" selected="true" disabled="disabled">Skills</option>
            <option value="Exmple">Example</option>
            <option value="Exmple">Exmple</option>
            <option value="Exmple">Exmple</option>
          </select>
          <input type={"text"} placeholder="Experience Duration In Years"></input>
          <SkillList />
      </>
    );
  }
  
  export default TechnicalSkillsetForm;
  