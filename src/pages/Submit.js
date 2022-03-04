import React, {useState} from "react"

function Submit({page, setPage}) {
  const submitClicked = () => {
    setPage(page + 1)
    setTimeout(goLandingPage, 3000)
  }
  const goLandingPage = () => {
    setPage(1)
  }
  const goBackClicked = () => {
    setPage(page - 1)
  }

  return (
    <div>
        <h1> I am Submit (page6)</h1>
        <button onClick={submitClicked}>Submit</button>
        <button onClick={goBackClicked}>go back</button>
      </div>
    );
  }
  
  export default Submit;
  