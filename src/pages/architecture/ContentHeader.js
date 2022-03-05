import React from "react"


function ContentHeader({page}) {
    return (
      <div>
        { page === 2 && <h1>Hey, Rocketeer, what are your coordinates?</h1>}
        { page === 3 && <h1>Tell us about your skills</h1>}
        { page === 4 && <h1>Covid Stuff</h1>}
        { page === 5 && <h1>What about you?</h1>} 
      </div>
    );
  }
  
  export default ContentHeader;
  