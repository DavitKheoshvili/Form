import React, {useState} from "react"
import Content from "./content";
import Header from "./Header";

/*
I need pages pages counter here
*/ 

function Body({page, result, setResult, errs, errsTechSkills, setErrsTechSkills, covidErrs, setCovidErrs, errRedberianInsights, setErrRedberianInsights}) {
    return (
      <div>
        <Header page={page}/>
        <Content page={page } result={result} setResult={setResult} 
        errs={errs} errsTechSkills={errsTechSkills} setErrsTechSkills={setErrsTechSkills} covidErrs={covidErrs} setCovidErrs={setCovidErrs} errRedberianInsights={errRedberianInsights} setErrRedberianInsights={setErrRedberianInsights}/>
      </div>
    );
  }
  
  export default Body;
  