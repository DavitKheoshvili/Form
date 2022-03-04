import React from "react"
import FormNavigation from "./architecture/FormNavigation";

function RedberrianInsights({page, setPage}) {
    return (
      <div>
        <h1>RedberrianInsights (page5)</h1>
        <FormNavigation page={page} setPage={setPage} />
      </div>
    );
  }
  
  export default RedberrianInsights;
  