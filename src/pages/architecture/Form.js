import React from "react"
import TechnicalSkillsetForm from "./TechnicalSkillsetForm";
import CovidForm from "./CovidForm";
import PersonalInfoForm from "./PersonalInfoForm";
import RedberrianInsightsForm from "./RedberrianInsightsForm";
import css from "./css.css"

/*Here I will need page counter*/
function Form({page, result, setResult}) {
    //console.log(page)
    return (
      <div className="form">
        { page === 2 && <PersonalInfoForm result={result} setResult={setResult}/>}
        { page === 3 && <TechnicalSkillsetForm result={result} setResult={setResult}/>}
        { page === 4 && <CovidForm result={result} setResult={setResult}/>}
        { page === 5 && <RedberrianInsightsForm result={result} setResult={setResult}/>}
      </div>
    );
  }
  
  export default Form;
  