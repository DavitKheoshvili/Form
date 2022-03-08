import React, {useEffect, useState} from "react"



function RedberrianInsightsForm({result, setResult, errRedberianInsights, setErrRedberianInsights}) {
  const strToBool = (str) => {
    if(str == "true") {return true;}else {return false}
  }
  const setWillOrganizeDevtalk = (e) => {
    setResult({...result, will_organize_devtalk: strToBool(e.target.value)})
    setErrRedberianInsights({...errRedberianInsights, will_organize_devtalk_err: ""})
  }
  const setDevtalkTopic = (e) => {
    setResult({...result, devtalk_topic: e.target.value})
    setErrRedberianInsights({...errRedberianInsights, devtalk_topic_err: ""})
  }
  const setSomethingSpecial = (e) => {
    setResult({...result, something_special: e.target.value})
    setErrRedberianInsights({...errRedberianInsights, something_special_err: ""})
  }

    return (
      <div>
        <h4>Would you attend Devtalks and maybe also organize your own?</h4>
        <form onChange={setWillOrganizeDevtalk}>
          <input type="radio" id="will_organize_devtalk" name="will_organize_devtalk" value={true} defaultChecked={result.will_organize_devtalk}/>Yes <br />
          <input type="radio" id="will_organize_devtalk" name="will_organize_devtalk" value={false} defaultChecked={!result.will_organize_devtalk}/>No
          <p className="err">{errRedberianInsights.will_organize_devtalk_err}</p>
        </form>
        {result.will_organize_devtalk && 
          <>
            <h4>What would you speak about Devtalks?</h4>
            <textarea className="inputBigText" type="text" placeholder="I would..." name="devtalk_topic" onChange={setDevtalkTopic} value={result.devtalk_topic}/>
            <p className="err">{errRedberianInsights.devtalk_topic_err}</p>
          </>
        }
         
      
        <h4>Tell us something special</h4>
        <textarea className="inputBigText" type="text" placeholder="I..." name="something_special" onChange={setSomethingSpecial} value={result.something_special}/>        
        <p className="err">{errRedberianInsights.something_special_err}</p>
      </div>
    );
  }
  
  export default RedberrianInsightsForm;
  