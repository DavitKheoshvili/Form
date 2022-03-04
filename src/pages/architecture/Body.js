import React, {useState} from "react"
import Content from "./content";
import Header from "./Header";

/*
I need pages pages counter here
*/ 

function Body({page}) {
    return (
      <div>
        <h1>I am Body</h1>
        <Header />
        <Content page={page}/>
      </div>
    );
  }
  
  export default Body;
  