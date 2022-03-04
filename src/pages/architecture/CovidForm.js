import React from "react"


function CovidForm() {
    return (
      <>
        <h1>how would you prefer to work?</h1>
        <from style={{display: 'flex', flexDirection: "column"}}>
            <div>
                <input type="radio"  />From Sairme office
            </div>
            <div>
                <input type="radio" />From Home
            </div>
            <div>
                <input type="radio" />Hybrid    
            </div>
        </from>
        <h1>did you contact to Covid 19? :(</h1>
        <from style={{display: 'flex', flexDirection: "column"}}>
            <div>
                <input type="radio"  />Yes
            </div>
            <div>
                <input type="radio" />No
            </div>
        </from>
        <h1>when?</h1>
        <input type="date" value="date"/>

        <h1>have you been vacinated?</h1>
        <div>
            <input type="radio"  />Yes
        </div>
        <div>
            <input type="radio" />No
        </div>
        <h1>when did you get your last covid vaccine?</h1>
        <input type="date" value="date"/>

      </>
    );
  }
  
  export default CovidForm;
  