import React, {useState} from "react";
import FormNavigation from "./architecture/FormNavigation";
import Body from "./architecture/Body";

function PersonalInfo({page, setPage, result, setResult}) {
    const [errs, setErrs] = useState({
      first_name_err: "",
      last_name_err: "",
      email_err: "",
      phone_err: ""
    })
    const nextClicked = () => {
      if(validName(result.first_name) && validLastName(result.last_name) && validEmail(result.email) && validPhone(result.phone)){
        setPage(page + 1)
      }

    }
    const backClicked = () => {
      setPage(page - 1)
    }
    const checkValidations = () => {
      validName(result.first_name)
      validLastName(result.last_name)
      validEmail(result.email)
      validPhone(result.phone)
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
        <h2>this is personal info (page2)</h2>
        <Body page={page} result={result} setResult={setResult} errs={errs}/>
        <div>
          <button onClick={backClicked}>Back</button>
          <button onClick={nextClicked}>Next</button>
          <button onClick={checkValidations}>Check Validations</button>
          <p>first name: {result.first_name}</p>
          <p>first name err: {errs.first_name_err}</p>
          <p>last name: {result.last_name}</p>
          <p>last name err: {errs.last_name_err}</p>
          <p>email name: {result.email}</p>
          <p>email_err name err: {errs.email_err}</p>
          <p>phone: {result.phone} phone_err: {errs.phone_err}</p>
        </div>
      </div>
    );
  }
  
  export default PersonalInfo;
  