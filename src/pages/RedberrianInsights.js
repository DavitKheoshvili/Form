import React from "react"
import Body from "./architecture/Body";
import FormNavigation from "./architecture/FormNavigation";

function RedberrianInsights({page, setPage}) {
    return (
      <div>
        <h1>RedberrianInsights (page5)</h1>
        <Body page={page}/>
        <FormNavigation page={page} setPage={setPage} />
      </div>
    );
  }
  
  export default RedberrianInsights;
  