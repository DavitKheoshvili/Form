import React from "react"
import TechnicalSkillsetForm from "./TechnicalSkillsetForm";
import CovidForm from "./CovidForm";
import PersonalInfoForm from "./PersonalInfoForm";
import RedberrianInsightsForm from "./RedberrianInsightsForm";
import css from "./css.css"

/*Here I will need page counter*/
function Form({page}) {
    //console.log(page)
    return (
      <div className="form">
        { page === 2 && <PersonalInfoForm />}
        { page === 3 && <TechnicalSkillsetForm />}
        { page === 4 && <CovidForm />}
        { page === 5 && <RedberrianInsightsForm />}
      </div>
    );
  }
  
  export default Form;
  