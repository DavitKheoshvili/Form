import React, {useState} from "react";
import css from "./architecture/css.css"
import FormNavigation from "./architecture/FormNavigation";

function PersonalInfo({page, setPage}) {
    
      
    return (

      <div>
        <h2>this is personal info (page2)</h2>

        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <input type="text"></input>
        <FormNavigation page={page} setPage={setPage}/>
      </div>
    );
  }
  
  export default PersonalInfo;
  