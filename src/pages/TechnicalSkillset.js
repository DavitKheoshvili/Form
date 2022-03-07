import React, { useState } from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function TechnicalSkillset({page, setPage, result, setResult}) {
  const [errsTechSkills, setErrsTechSkills] = useState({
    min_skill_err: "",
    same_skill_err: ""
  })
  const nextClicked = () => {
    if(result.skills.length < 1){
      setErrsTechSkills({...errsTechSkills, min_skill_err: "You must choose at least one skill"})
    }else {
      setErrsTechSkills({...errsTechSkills, min_skill_err: ""})
      setPage(page + 1)
    }
  }
  const backClicked = () => {
    setPage(page - 1)
  }
  
  
    return (
      <div>
        <Body page={page} result={result} setResult={setResult} errsTechSkills={errsTechSkills} setErrsTechSkills={setErrsTechSkills}/>
        <button onClick={backClicked}>Back</button>
        <button onClick={nextClicked}>Next</button>
      </div>
    );
  }
  
  export default TechnicalSkillset;
  