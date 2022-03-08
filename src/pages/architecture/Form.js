import React from "react"
import TechnicalSkillsetForm from "./TechnicalSkillsetForm";
import CovidForm from "./CovidForm";
import PersonalInfoForm from "./PersonalInfoForm";
import RedberrianInsightsForm from "./RedberrianInsightsForm";
import css from "./css.css"

/*Here I will need page counter*/
function Form({skillList, page, result, setResult, errs, errsTechSkills, setErrsTechSkills, covidErrs, setCovidErrs, errRedberianInsights, setErrRedberianInsights}) {
    //console.log(page)
    return (
      <div className="form">
        { page === 2 && <PersonalInfoForm result={result} setResult={setResult} errs={errs} />}
        { page === 3 && <TechnicalSkillsetForm skillList={skillList} page={page} result={result} setResult={setResult} errsTechSkills={errsTechSkills} setErrsTechSkills={setErrsTechSkills}/>}
        { page === 4 && <CovidForm result={result} setResult={setResult} errs={errs} covidErrs={covidErrs} setCovidErrs={setCovidErrs}/>}
        { page === 5 && <RedberrianInsightsForm result={result} setResult={setResult} errs={errs} errRedberianInsights={errRedberianInsights} setErrRedberianInsights={setErrRedberianInsights} />}
      </div>
    );
  }
  
  export default Form;
  