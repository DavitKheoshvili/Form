import React from "react"
import FormNavigation from "./architecture/FormNavigation";

function Covid({page, setPage}) {
    return (

      <div>
        <h1>Covid (page4)</h1>
        <FormNavigation page={page} setPage={setPage} />
      </div>
    );
  }
  
  export default Covid;
  