import React, {useState} from "react";
import Body from "./architecture/Body";

function PersonalInfo({page, setPage, result, setResult}) {
    const [errs, setErrs] = useState({
      first_name_err: "",
      last_name_err: "",
      email_err: "",
      phone_err: ""
    })
    const nextClicked = () => {
      if(checkValidations()){
        setPage(page + 1)
      }

    }
    const backClicked = () => {
      setPage(page - 1)
    }
    //using this function for developing process and probably will delete this after work will done.
    const checkValidations = () => {
      validName(result.first_name)
      validLastName(result.last_name)
      validEmail(result.email)
      validPhone(result.phone)
      if(validName(result.first_name) && validLastName(result.last_name) && validEmail(result.email) && validPhone(result.phone)){
        return true
      }else{
        return false
      }
    }
    const validName = (fName) => {
      if(!/^([a-zA-Z]{2,})$/g.test(fName)){
        setErrs({...errs, first_name_err: "First name required. Min 2 character"})
        return false
      }else {
        setErrs({...errs, first_name_err: ""})
        return true
      }
    }
    const validLastName = (lName) => {
      if(!/^([a-zA-Z]{2,})$/g.test(lName)){
        setErrs({...errs, last_name_err: "Last name required. Min 2 character"})
        return false
      }else {
        setErrs({...errs, last_name_err: ""})
        return true
      }
    }
    const validEmail = (email) => {
      if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setErrs({...errs, email_err: "Email required. Check email format: example@example.ex"})
        return false
      }else {
        setErrs({...errs, email_err: ""})
        return true
      }
    }
    const validPhone = (phone) => {
      if(result.phone == "") {
        setErrs({...errs, phone_err: ""})
        return true
      }
      if(!/^(\+9955[0-9]{8})$/.test(phone)){
        setErrs({...errs, phone_err: "Phone required. Check phone format: +9955________"})
        return false
      }else {
        setErrs({...errs, phone_err: ""})
        return true
      }
    }

    return (
      <div>
        <Body page={page} result={result} setResult={setResult} errs={errs}/>
        <div className="navBtns">
          <button className="backBtn" onClick={backClicked}>{"<"}</button>
          <button className="nextBtn" onClick={nextClicked}>{">"}</button>
        </div>
      </div>
    );
  }
  
  export default PersonalInfo;
  