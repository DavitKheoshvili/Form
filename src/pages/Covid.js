import React from "react"
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function Covid({page, setPage, result, setResult}) {
    return (

      <div>
        <h1>Covid (page4)</h1>
        <Body page={page} result={result} setResult={setResult}/>
        <FormNavigation page={page} setPage={setPage} />
      </div>
    );
  }
  
  export default Covid;
  