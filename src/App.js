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

  return (
    <div className="App">
      
      { page === 1 && <Landing setPage={ setPage}/>}
      { page === 2 && <PersonalInfo page={page} setPage={ setPage}/>}
      { page === 3 && <TechnicalSkillset page={page} setPage={ setPage}/>}
      { page === 4 && <Covid page={page} setPage={ setPage}/>}
      { page === 5 && <RedberrianInsights page={page} setPage={ setPage}/>}
      { page === 6 && <Submit page={page} setPage={setPage} />}
      { page === 7 && <Thanks />}
      { page === 8 && <SubmittedItemList setPage={setPage}/>}

    </div>
  );
}


export default App;
