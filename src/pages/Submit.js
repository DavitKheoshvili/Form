import React, {useState} from "react"
import axios from "axios"

function Submit({page, setPage, result, setResult}) {
  
    
  
  const submitClicked = (e) => {
    e.preventDefault();
    axios.post("https://bootcamp-2022.devtest.ge/api/application", result)
    setPage(page + 1)
    setTimeout(goLandingPage, 3000)
    console.log('sumbit', result)

  }
  const goLandingPage = () => {
    setPage(1)
  }
  const goBackClicked = () => {
    setPage(page - 1)
  }

  return (
      <div>
        <button onClick={submitClicked}>Submit</button>
        <button onClick={goBackClicked}>go back</button>
        <br />
      </div>
      
    );
  }
  
  export default Submit;
  