import React, {useState, useEffect} from "react"


function SelectedItem({item, skillList}) {
  const setTitle = (id) => {
     return skillList.filter(elem => 
       elem.id == id
     )[0].title
  }
  const workPrefCheck = (str) => {
    if(item.work_preference == str) return true
  }
    return (
      <div className="selectedItem">
        <div className="flexBox">
          <div className="flexBoxItem">Personal Information
          <div className="box">
            <div className="personalInfoTitles">
              <p>First Name</p>
              <p>Last Name</p>
              <p>E Mail</p>
              <p>Phone</p>
            </div>
            <div className="boxValues">
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          </div>
          </div>
            <div className="flexBoxItem">Skillset
              <div className="box">
                <div className="personalInfoTitles">
                  {item.skills.map(skill => 
                    <p>{setTitle(skill.id)}</p>
                  )}
                  
                </div>
                <div className="boxValues">
                {item.skills.map(skill => (<p>
                    Experience in years: {skill.experience}
                  </p>))}
                </div>
            </div>
          </div>
        </div>
        <div className="flexBox">
          <div className="flexBoxItem">Covid Situation
          <div className="workPreferences">
            <label className="">How would you prefer to work? <br/>
              <input type="radio" name="WorkPreferences" checked={workPrefCheck("from_office")} disabled/> From Sairme Office <br/>
              <input type="radio" name="WorkPreferences" checked={workPrefCheck("from_home")} disabled/> From Home <br/>
              <input type="radio" name="WorkPreferences" checked={workPrefCheck("hybrid")} disabled/> Hybrid
            </label> <br/>
            <label className="">Did you have covid 19? <br/>
              <input type="radio" name="had_covid" checked={item.had_covid} disabled/> Yes <br/>
              <input type="radio" name="had_covid" checked={!item.had_covid} disabled/> No <br/>
            </label> 
            {item.had_covid && <><p>When you have Covid 19?</p><input type="date" value={item.had_covid_at} disabled/></>} <br/> 

            <label className="">Have you been vaccinated? <br/>
              <input type="radio" name="vaccinated" checked={item.vaccinated} disabled/> Yes <br/>
              <input type="radio" name="vaccinated" checked={!item.vaccinated} disabled/> No <br/>
            </label> 
            {item.vaccinated && <input type="date" value={item.had_covid_at} disabled/>}
            </div>
          </div>
          <div className="flexBoxItem">Insigts
          <label className="">Would you attend devtalks and maybe also organize your own?<br/>
              <input type="radio" name="devTalks" checked={item.will_organize_devtalk} disabled/> Yes <br/>
              <input type="radio" name="devTalks" checked={!item.will_organize_devtalk} disabled/> No <br/>
          </label> 
          {item.will_organize_devtalk && <><p>What would you speak about at Devtalk?</p><textarea type="text" value={item.devtalk_topic} disabled/></>} <br/> 
          <p>Tell us something special</p>
          <textarea type="text" value={item.something_special} disabled/>
          </div>
        </div>
      </div>
    );
  }
  
  export default SelectedItem;
  