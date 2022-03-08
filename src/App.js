import React, { useState, useEffect } from "react";
import Covid from "./pages/Covid";
import Landing from "./pages/Landing";
import PersonalInfo from "./pages/PersonalInfo";
import TechnicalSkillset from "./pages/TechnicalSkillset";
import RedberrianInsights from "./pages/RedberrianInsights";
import Submit from "./pages/Submit";
import Thanks from "./pages/Thanks";
import SubmittedItemList from "./pages/SubmittedItemList";
import axios from "axios";

function App() {
  const  [page, setPage] = useState(1);
  const [resultJson, setResultJson] = useState({
    token: "89nOpas|asdanjjh^&as",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    skills: [],
    work_preference: '',
    had_covid: false,
    had_covid_at: "1800-01-26",
    vaccinated: false,
    vaccinated_at: "1800-01-26",
    will_organize_devtalk: false,
    devtalk_topic: "",
    something_special: ""
  })
  
  const [skillList, setSkillList] = useState([{id: "1", title: "HTML"}]);
    useEffect(() => {
      axios.get("https://bootcamp-2022.devtest.ge/api/skills")
      .then(res => {
        setSkillList(res.data)
      })
       console.log("vvv" , skillList)

    }, [])

  return (
    <div className="App">
      { page === 1 && <Landing setPage={ setPage} />}
      <div className="formPages">
      { page === 2 && <PersonalInfo page={page} setPage={ setPage} result={resultJson} setResult={setResultJson}/>}
      { page === 3 && <TechnicalSkillset skillList={skillList} page={page} setPage={ setPage} result={resultJson} setResult={setResultJson}/>}
      { page === 4 && <Covid page={page} setPage={ setPage} result={resultJson} setResult={setResultJson}/>}
      { page === 5 && <RedberrianInsights page={page} setPage={ setPage} result={resultJson} setResult={setResultJson}/>}
      </div>
      { page === 6 && <Submit page={page} setPage={setPage} result={resultJson} setResult={setResultJson}/>}
      { page === 7 && <Thanks />}
      { page === 8 && <SubmittedItemList setPage={setPage}/>}
    </div>
  );
}


export default App;
