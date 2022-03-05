import React from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function TechnicalSkillset({page, setPage, result, setResult}) {
    return (
      <div>
        <h1>TechnicalSkillset (page3)</h1>
        <Body page={page} result={result} setResult={setResult}/>
        <FormNavigation page={page} setPage={setPage}/>
      </div>
    );
  }
  
  export default TechnicalSkillset;
  