import React, { useState } from "react";
import Covid from "./pages/Covid";
import Landing from "./pages/Landing";
import PersonalInfo from "./pages/PersonalInfo";
import TechnicalSkillset from "./pages/TechnicalSkillset";
import RedberrianInsights from "./pages/RedberrianInsights";
import Submit from "./pages/Submit";
import Thanks from "./pages/Thanks";
import SubmittedItemList from "./pages/SubmittedItemList";


function App() {
  const  [page, setPage] = useState(1);
  const nextClicked = () => {
    if(page >= 8) return
    setPage(page + 1)
  }
  const backClicked = () => {
    if(page <= 1) return
    setPage(page - 1)
  }

  return (
    <div className="App">
      <h1>test1</h1>
      { page === 1 && <Landing setPage={setPage}/>}
      { page === 2 && <PersonalInfo setPage={setPage}/>}
      { page === 3 && <TechnicalSkillset  setPage={setPage}/>}
      { page === 4 && <Covid  setPage={setPage}/>}
      { page === 5 && <RedberrianInsights  setPage={setPage}/>}
      { page === 6 && <Submit setPage={setPage} />}
      { page === 7 && <Thanks  setPage={setPage}/>}
      { page === 8 && <SubmittedItemList  setPage={setPage}/>}

      
      <button onClick={backClicked}>BackApp</button>
      <button onClick={nextClicked}>NextApp</button>
    </div>
  );
}


export default App;
