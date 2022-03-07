import React from "react"


function CovidForm({result, setResult}) {
    const strToBool = (str) => {
        if(str == "true") return true;
        return false
    }
    const setWorkPrefer = (e) => {
        setResult({...result, work_preference: e.target.value})
    }
    const setHadCovid = (e) => {
        
        setResult({...result, had_covid: strToBool(e.target.value)})
        
        }
    const setHadCovidAt = (e) => {
        setResult({...result, had_covid_at: e.target.value})
    }
    const setVaccinated = (e) => {
        setResult({...result, vaccinated: e.target.value})
    }
    const setVaccinatedAt = (e) => {
        setResult({...result, vaccinated_at: e.target.value})
    }
    return (
      <>
        <h1>how would you prefer to work?</h1>
        <form onChange={setWorkPrefer}>
            <input type="radio" id='from_office' name="work_prefer" value="from_office"/>From Sairme office <br />
            <input type="radio" id='from_home' name="work_prefer" value="from_home"/>From Home <br />
            <input type="radio" id='hybrid' name="work_prefer" value="hybrid"/>Hybrid    
        </form>

        <h1>did you contact to Covid 19? :(</h1>
        <form onChange={setHadCovid}>
            <input type="radio" value={true} name="hadCovid"/>Yes <br />
            <input type="radio" value={false} name="hadCovid"/>No
        </form>
        <h1>when?</h1>
        <input type="date" value={result.had_covid_at} min="2018-01-01"  onChange={setHadCovidAt}/>

        <h1>have you been vacinated?</h1>
        <form onChange={setVaccinated}>
            <input type="radio" name="vacinated" value={true}/>Yes <br />
            <input type="radio" name="vacinated" value={false}/>No
        </form>
        <h1>when did you get your last covid vaccine?</h1>
        <input type="date" value={result.vaccinated_at} min="2018-01-01"  onChange={setVaccinatedAt}/>
        
        {console.log(result)}
      </>
    );
  }
  
  export default CovidForm;
  