import React from "react"
import Body from "./architecture/Body";
import FormNavigation from "./architecture/FormNavigation";

function RedberrianInsights({page, setPage, result, setResult}) {
    return (
      <div>
        <h1>RedberrianInsights (page5)</h1>
        <Body page={page} result={result} setResult={setResult}/>
        <FormNavigation page={page} setPage={setPage} />
      </div>
    );
  }
  
  export default RedberrianInsights;
  