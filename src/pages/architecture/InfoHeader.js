import React from "react"


function InfoHeader({page}) {
    return (
      <div className="infoHeader">
        { page === 2 && <h1>Redberry Origins</h1>}
        { page === 3 && <h1>A bit about our battles</h1>}
        { page === 4 && <h1>Redberry Covid Policies</h1>}
        { page === 5 && <h1>Redberrian Insights</h1>}
      </div>
    );
  }
  
  export default InfoHeader;
  