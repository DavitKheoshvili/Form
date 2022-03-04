import React, {useState} from "react"
import MainHeader from "./architecture/MainHeader";
import SubmittedItemList from "./SubmittedItemList";


function Landing({setPage}) {
  const startClicked = () => {
    setPage(2)
  }
  const submitedAplicationsClicked = () => {
    setPage(8)
  }
  const newWindow = () => {
    submitedAplicationsClicked()
  }
  return (
    <div>
      <h3>page1</h3>
      <MainHeader />
        <button onClick={startClicked}>Start Questionarie</button>
        <button onClick={submitedAplicationsClicked}>Submited Applications</button>
      </div>
    );
  }
  
  export default Landing;
  