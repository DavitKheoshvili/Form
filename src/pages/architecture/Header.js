import React from "react"
import ContentHeader from "./ContentHeader";
import InfoHeader from "./InfoHeader";

function Header({page}) {
    return (
      <div className="headers">
        <ContentHeader page={page}/>
        <InfoHeader page={page}/>
      </div>
    );
  }
  
  export default Header;
  