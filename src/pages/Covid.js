import React, { useState } from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function Covid({page, setPage, result, setResult}) {
  const [covidErrs, setCovidErrs] = useState({
    work_preference_err: "You must chose one",
    had_covid_err: "You must chose one",
    had_covid_at_err: "Please fill date",
    vaccinated_err: "You must chose one",
    vaccinated_at_err: "Please fill date",
    fill_all_err: ""
  })
  const nextClicked = () => {
    if(covidErrs.work_preference_err == "" && covidErrs.had_covid_err == "" && (covidErrs.had_covid_at_err == "" || !result.had_covid)
    && covidErrs.vaccinated_err == "" && (covidErrs.vaccinated_at_err == "" || !result.vaccinated)) {
      setCovidErrs({...covidErrs, fill_all_err: ""})
      setPage(page + 1)
    }else {
      setCovidErrs({...covidErrs, fill_all_err: "Please fill all necessary information first"})
    }
  }
  const backClicked = () => {
    setPage(page - 1)
  }
    return (

      <div className="covidPage">
        <div className="covidPageDiv1">
          <Body page={page} result={result} setResult={setResult} covidErrs={covidErrs} setCovidErrs={setCovidErrs}/>
        </div>
        <div className="navBtns covidPageDiv2">
          <button className="backBtn" onClick={backClicked}>{"<"}</button>
          <button className="nextBtn" onClick={nextClicked}>{">"}</button>
        </div>
      </div>
    );
  }
  
  export default Covid;
  