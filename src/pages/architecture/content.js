import React from "react"
import Form from "./Form";
import InfoText from "./InfoText"
import css from "./css.css"

/*Here I will need page counter*/
function Content({page}) {
  //console.log(page)
    return (
      <div className="content">
        <Form page={page}/>
        <InfoText />
      </div>
    );
  }
  
  export default Content;
  