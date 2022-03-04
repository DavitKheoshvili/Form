import React, {useState} from "react";
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function PersonalInfo({page, setPage}) {
    return (
      <div>
        <h2>this is personal info (page2)</h2>
        <Body page={page}/>
        <FormNavigation page={page} setPage={setPage}/>
      </div>
    );
  }
  
  export default PersonalInfo;
  