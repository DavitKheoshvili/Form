import React, {useState} from "react";

function PersonalInfo({setPage}) {
    
    const nextClicked = () => {
        setPage(3)
        console.log("nextClicked")

      }
      const backClicked = () => {
        setPage(1)
        console.log("backClicked")
      }
    return (

      <div>
        <h2>this is personal info (page2)</h2>

        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <button onClick={backClicked}>Back</button>
        <button onClick={nextClicked}>Next</button>
      </div>
    );
  }
  
  export default PersonalInfo;
  