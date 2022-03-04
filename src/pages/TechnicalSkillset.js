import React from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function TechnicalSkillset({page, setPage}) {
    return (
      <div>
        <h1>TechnicalSkillset (page3)</h1>
        <Body page={page}/>
        <FormNavigation page={page} setPage={setPage}/>
      </div>
    );
  }
  
  export default TechnicalSkillset;
  