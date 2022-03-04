import React, {useState} from "react"


/*Here I will need page counter*/
function FormNavigation({page, setPage}) {
    const nextClicked = () => {
        setPage(page + 1)
      }
      const backClicked = () => {
        setPage(page - 1)
      }
    return (
      <div>
        <button onClick={backClicked}>Back</button>
        <button onClick={nextClicked}>Next</button>
      </div>
    );
  }
  
  export default FormNavigation;
  