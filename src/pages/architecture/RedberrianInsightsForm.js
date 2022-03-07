import React, {useEffect, useState} from "react"



function RedberrianInsightsForm({result, setResult}) {
 
  const setWillOrganizeDevtalk = (e) => {
    setResult({...result, will_organize_devtalk: e.target.value})
  }
  
  const setDevtalkTopic = (e) => {
    setResult({...result, devtalk_topic: e.target.value})
  }
  const setSomethingSpecial = (e) => {
    setResult({...result, something_special: e.target.value})
  }


    return (
      <div>
        <h1>Would you attend Devtalks and maybe also organize your own?</h1>
        <form onChange={setWillOrganizeDevtalk}>
          <input type="radio" id="will_organize_devtalk" name="will_organize_devtalk" value={true} defaultChecked={result.will_organize_devtalk}/>Yes <br />
          <input type="radio" id="will_organize_devtalk" name="will_organize_devtalk" value={false} defaultChecked={!result.will_organize_devtalk}/>No
        </form>
        
         <h1>What would you speak about Devtalks?</h1>
         <input type="text" placeholder="I would..." name="devtalk_topic" onChange={setDevtalkTopic} value={result.devtalk_topic}/>
      
        <h1>Tell us something special</h1>
        <input type="text" placeholder="I..." name="something_special" onChange={setSomethingSpecial} value={result.something_special}/>
        <p>{result.will_organize_devtalk}</p>
        
      </div>
    );
  }
  
  export default RedberrianInsightsForm;
  