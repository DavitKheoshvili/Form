import React, {useState} from "react"
import Content from "./content";
import Header from "./Header";

/*
I need pages pages counter here
*/ 

function Body({skillList, page, result, setResult, errs, errsTechSkills, setErrsTechSkills, covidErrs, setCovidErrs, errRedberianInsights, setErrRedberianInsights}) {
    return (
      <div className="formPagesBody">
        <Header page={page}/>
        <Content skillList={skillList} page={page } result={result} setResult={setResult} 
        errs={errs} errsTechSkills={errsTechSkills} setErrsTechSkills={setErrsTechSkills} covidErrs={covidErrs} setCovidErrs={setCovidErrs} errRedberianInsights={errRedberianInsights} setErrRedberianInsights={setErrRedberianInsights}/>
      </div>
    );
  }
  
  export default Body;
  