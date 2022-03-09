import React, {useState, useEffect} from "react"
import axios from "axios"
import SelectedItem from "./architecture/SelectedItem"

function SubmittedItemList({setPage, skillList}) {
  const [applicationList, setApplicationList] = useState([])
    useEffect(() => {
      axios.get("https://bootcamp-2022.devtest.ge/api/applications?token=89nOpas%7Casdanjjh%5E%26as")
      .then(res => {
        setApplicationList(res.data)
       //console.log("res.data" , res.data)
       //console.log("applicationList" , applicationList)

      })
    }, [])
    const [itemClicked, setItemClicked] = useState(-1)

  const goLandingPage = () => {
    setPage(1)
  }
  const itemClickedBtn = (index) => {
    if(itemClicked == index){
      setItemClicked(-1)
      return
    }
    setItemClicked(index)
  }
  
    return (
      <div>
        <h1> Submited Applications</h1>
        <button className="goWelcomePage" onClick={goLandingPage}>Go Welcome Page</button>
        
        <div className="submitedListItems">
        {applicationList.map((elem, index) => (
        <div key={index}>
          <button onClick={() => {itemClickedBtn(index)}} className="submitedListItem" >
            <p>{index}</p>
            <p>^</p>
          </button>
          {itemClicked==index && <SelectedItem item={elem} skillList={skillList}/>}
        </div>
        ))}
        </div>
      </div>
    );
  }
  
  export default SubmittedItemList;
  