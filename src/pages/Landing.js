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
    <div className="landing">
      <MainHeader />
      <button className="startBtn" onClick={startClicked}>Start Questionarie</button>
      <button className="submittedAppsBtn" onClick={submitedAplicationsClicked}>Submited Applications</button>
    </div>
    );
  }
  
  export default Landing;
  