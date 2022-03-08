import React from "react"


function PersonalInfoForm({result, setResult, errs}) {
    return (
      <>
        <input type={"text"} placeholder="First Name" value={result.first_name} 
        onChange={(event)=>setResult({...result, first_name: event.target.value})}></input>
        <p className="err">{errs.first_name_err}</p>
        <input type={"text"} placeholder="Last Name" value={result.last_name} 
        onChange={(event)=>setResult({...result, last_name: event.target.value})}></input>
        <p className="err">{errs.last_name_err}</p>
        <input type={"text"} placeholder="E mail" value={result.email} 
        onChange={(event)=>setResult({...result, email: event.target.value})}></input>
        <p className="err">{errs.email_err}</p>
        <input type={"text"} placeholder="+995 5__ __ __ __" value={result.phone} 
        onChange={(event)=>setResult({...result, phone: event.target.value})}></input>
        <p className="err">{errs.phone_err}</p>
      </>
      
    );
  }
  
  export default PersonalInfoForm;
  