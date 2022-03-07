import React from "react"
import Body from "./architecture/Body";
import FormNavigation from "./architecture/FormNavigation";

function RedberrianInsights({page, setPage, result, setResult}) {
  const nextClicked = () => {
    setPage(page + 1)
  }
  const backClicked = () => {
    setPage(page - 1)
  }
    return (
      <div>
        <h1>RedberrianInsights (page5)</h1>
        <Body page={page} result={result} setResult={setResult}/>
        <div>
          <button onClick={backClicked}>Back</button>
          <button onClick={nextClicked}>Next</button>
        </div>
      </div>
    );
  }
  
  export default RedberrianInsights;
  