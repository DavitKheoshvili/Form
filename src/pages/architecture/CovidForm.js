import React from "react"


function CovidForm({result, setResult, covidErrs, setCovidErrs}) {
    const strToBool = (str) => {
        if(str == "true") {return true;}else {return false}
    }
    const setWorkPrefer = (e) => {
        setResult({...result, work_preference: e.target.value})
        setCovidErrs({...covidErrs, work_preference_err: ""})
    }
    const setHadCovid = (e) => {
        setResult({...result, had_covid: strToBool(e.target.value)})
        setCovidErrs({...covidErrs, had_covid_err: ""})
    }
    const setHadCovidAt = (e) => {
        setResult({...result, had_covid_at: e.target.value})
        setCovidErrs({...covidErrs, had_covid_at_err: ""})
    }
    const setVaccinated = (e) => {
        setResult({...result, vaccinated: strToBool(e.target.value)})
        setCovidErrs({...covidErrs, vaccinated_err: ""})
    }
    const setVaccinatedAt = (e) => {
        setResult({...result, vaccinated_at: e.target.value})
        setCovidErrs({...covidErrs, vaccinated_at_err: ""})
    }
    return (
      <>
        <h4>how would you prefer to work?</h4>
        <form onChange={setWorkPrefer}>
            <input type="radio" id='from_office' name="work_prefer" value="from_office"/>From Sairme office <br />
            <input type="radio" id='from_home' name="work_prefer" value="from_home"/>From Home <br />
            <input type="radio" id='hybrid' name="work_prefer" value="hybrid"/>Hybrid    
        </form>
        <p className="err">{covidErrs.work_preference_err}</p>
        <h4>did you contact to Covid 19? :(</h4>
        <form onChange={setHadCovid}>
            <input type="radio" value={true} name="hadCovid"/>Yes <br />
            <input type="radio" value={false} name="hadCovid"/>No
        </form>
        <p className="err">{covidErrs.had_covid_err}</p>
        {result.had_covid && 
        <>
            <h4>when?</h4>
            <input type="date" value={result.had_covid_at} min="2018-01-01"  onChange={setHadCovidAt}/>
            <p className="err">{covidErrs.had_covid_at_err}</p>
        </>}
        
        <h4>have you been vacinated?</h4>
        <form onChange={setVaccinated}>
            <input type="radio" name="vacinated" value={true}/>Yes <br />
            <input type="radio" name="vacinated" value={false}/>No
        </form>
        <p className="err">{covidErrs.vaccinated_err}</p>

        {result.vaccinated &&
        <>
            <h4>when did you get your last covid vaccine?</h4>
            <input type="date" value={result.vaccinated_at} min="2018-01-01"  onChange={setVaccinatedAt}/>
            <p className="err">{covidErrs.vaccinated_at_err}</p>
        </>
        }
        <p className="err">{covidErrs.fill_all_err}</p>
      </>
    );
  }
  
  export default CovidForm;
  