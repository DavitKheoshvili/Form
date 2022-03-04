import React from "react"


function RedberrianInsightsForm() {
    return (
      <div>
        <h1>Would you attend Devtalks and maybe also organize your own?</h1>
        <div>
            <input type="radio"  />Yes
        </div>
        <div>
            <input type="radio" />No
        </div>
        <h1>What would you speak about Devtalks?</h1>
        <input type="text" placeholder="I would..."/>

        <h1>Tell us something special</h1>
        <input type="text" placeholder="I..."/>
      </div>
    );
  }
  
  export default RedberrianInsightsForm;
  