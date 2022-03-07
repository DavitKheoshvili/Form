import React, {useState} from "react"
import Content from "./content";
import Header from "./Header";

/*
I need pages pages counter here
*/ 

function Body({page, result, setResult, errs}) {
    return (
      <div>
        <Header page={page}/>
        <Content page={page } result={result} setResult={setResult} errs={errs} />
      </div>
    );
  }
  
  export default Body;
  