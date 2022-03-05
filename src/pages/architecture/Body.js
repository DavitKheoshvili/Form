import React, {useState} from "react"
import Content from "./content";
import Header from "./Header";

/*
I need pages pages counter here
*/ 

function Body({page}) {
    return (
      <div>
        <Header page={page}/>
        <Content page={page}/>
      </div>
    );
  }
  
  export default Body;
  