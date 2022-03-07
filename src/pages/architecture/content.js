import React from "react"
import Form from "./Form";
import InfoText from "./InfoText"
import css from "./css.css"

/*Here I will need page counter*/
function Content({page, result, setResult, errs, errsTechSkills, setErrsTechSkills, covidErrs, setCovidErrs, errRedberianInsights, setErrRedberianInsights}) {
  //console.log(page)
    return (
      <div className="content" >
        <Form page={page} result={result} setResult={setResult}
        errs={errs} errsTechSkills={errsTechSkills} setErrsTechSkills={setErrsTechSkills} covidErrs={covidErrs} setCovidErrs={setCovidErrs} errRedberianInsights={errRedberianInsights} setErrRedberianInsights={setErrRedberianInsights} />
        <InfoText page={page} />
      </div>
    );
  }
  
  export default Content;
  