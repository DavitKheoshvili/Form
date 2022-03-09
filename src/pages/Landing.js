import React, {useState} from "react"
import MainHeader from "./architecture/MainHeader";
import rocketman from "./architecture/assets/rocketman.svg"

function Landing({setPage}) {
  const startClicked = () => {
    setPage(2)
  }
  const submitedAplicationsClicked = () => {
    setPage(8)
  }
  
  return (
    <div className="landing">
      <div className="landing-inner">
        <MainHeader />
        <button className="startBtn" onClick={startClicked}>Start Questionarie</button>
        <button className="submittedAppsBtn" onClick={submitedAplicationsClicked}>Submited Applications</button>
      </div>
      <div className="rocketman">
        <img src={rocketman} alt="roketman" />
      </div>
    </div>
    );
  }
  
  export default Landing;
  