import React from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function TechnicalSkillset({page, setPage, result, setResult}) {
  const nextClicked = () => {
    setPage(page + 1)
  }
  const backClicked = () => {
    setPage(page - 1)
  }
    return (
      <div>
        <h1>TechnicalSkillset (page3)</h1>
        <Body page={page} result={result} setResult={setResult}/>
        <button onClick={backClicked}>Back</button>
        <button onClick={nextClicked}>Next</button>
      </div>
    );
  }
  
  export default TechnicalSkillset;
  