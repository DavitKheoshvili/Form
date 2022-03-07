import React, {useState} from "react"
import Body from "./architecture/Body";
import FormNavigation from "./architecture/FormNavigation";

function RedberrianInsights({page, setPage, result, setResult}) {
  const [errRedberianInsights, setErrRedberianInsights] = useState({
    will_organize_devtalk_err: "Required",
    devtalk_topic_err: "Required",
    something_special_err: "Required"
  })
  const nextClicked = () => {
    if(errRedberianInsights.will_organize_devtalk_err == "" && (!result.will_organize_devtalk || errRedberianInsights.devtalk_topic_err == "")
    && errRedberianInsights.something_special_err == ""){
    setPage(page + 1)
    }
  }
  const backClicked = () => {
    setPage(page - 1)
  }
    return (
      <div>
        <Body page={page} result={result} setResult={setResult} errRedberianInsights={errRedberianInsights} setErrRedberianInsights={setErrRedberianInsights}/>
        <div>
          <button onClick={backClicked}>Back</button>
          <button onClick={nextClicked}>Next</button>
        </div>
      </div>
    );
  }
  
  export default RedberrianInsights;
  