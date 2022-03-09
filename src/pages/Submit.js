import React, {useState} from "react"
import axios from "axios"

function Submit({page, setPage, result, setResult}) {
    console.log(result, typeof result.phone, typeof result.devtalk_topic)
    if(result.phone == "") {
      setResult({...result, phone: "+995512123456"})
    }
    if(result.devtalk_topic == "") {
      setResult({...result, devtalk_topic: "The user left this box empty"})
    }
    console.log("checked",result, typeof result.phone, typeof result.devtalk_topic)

  const submitClicked = (e) => {
    
    console.log("clicked", result, typeof result.phone, typeof result.devtalk_topic)

    e.preventDefault();
    axios.post("https://bootcamp-2022.devtest.ge/api/application", result)
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
      <div className="submit">
        <button className="submitBtn" onClick={submitClicked}>Submit</button>
        <button className="goBackBtn" onClick={goBackClicked}>go back</button>
        <br />
      </div>
    );
  }
  
  export default Submit;
  