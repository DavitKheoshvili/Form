import React from "react"

function SubmittedItemList({setPage}) {
  const goLandingPage = () => {
    setPage(1)
  }
  
    return (
      <div>
        <h1> Submited Applications (page8)</h1>
        <button onClick={goLandingPage}>Go Welcome Page</button>
      </div>
    );
  }
  
  export default SubmittedItemList;
  