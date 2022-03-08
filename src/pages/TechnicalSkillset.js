import React, { useState } from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function TechnicalSkillset({skillList, page, setPage, result, setResult}) {
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
        <Body skillList={skillList} page={page} result={result} setResult={setResult} errsTechSkills={errsTechSkills} setErrsTechSkills={setErrsTechSkills}/>
        <div className="navBtns">
          <button className="backBtn" onClick={backClicked}>{"<"}</button>
          <button className="nextBtn" onClick={nextClicked}>{">"}</button>
        </div>
      </div>
    );
  }
  
  export default TechnicalSkillset;
  