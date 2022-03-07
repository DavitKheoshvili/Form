import React, {useState} from "react"
import MainHeader from "./architecture/MainHeader";



function Landing({setPage}) {
  const startClicked = () => {
    setPage(2)
  }
  const submitedAplicationsClicked = () => {
    setPage(8)
  }
  
  return (
    <div>
      <MainHeader />
        <button onClick={startClicked}>Start Questionarie</button>
        <button onClick={submitedAplicationsClicked}>Submited Applications</button>
      </div>
    );
  }
  
  export default Landing;
  