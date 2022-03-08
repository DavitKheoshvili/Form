import React, {useState, useEffect} from "react"

import axios from "axios";


function TechnicalSkillsetForm({skillList, result, setResult, errsTechSkills, setErrsTechSkills, page}) {
    
    
    const [skill, setSkill] = useState({id:"1", title: "HTML"});
    
    const addSkill = () => {
      for(let i = 0; i < result.skills.length; i++){
        if(result.skills[i].id == skill.id){
          setErrsTechSkills({...errsTechSkills, same_skill_err: "You have allready added this skill"})
          return;
        }
      }
      setErrsTechSkills({...errsTechSkills, same_skill_err: ""})
      setResult({...result, skills: result.skills.concat(skill)})
    }
    const addID = (e) => {
      setSkill({...skill, id: e.target.value})
    }
    const addExperience = (e) => {
      setSkill({...skill, experience: e.target.value})
    }
    
    const removeItem = (index) => {
      setResult({...result, skills: result.skills.filter(elem => elem.id != index)})
    }
    
    return (
      <div className="techSkillsForm"> 
          
          <select className="form-items" onChange={addID}>
            {skillList.map(skill => (
              <option key={skill.id} value={skill.id}>{skill.title}</option>
            ))}
          </select>
          <input className="form-items" type={"text"} placeholder="Experience Duration In Years" onChange={addExperience}></input>
          <button className="addLanguageBtn form-items" onClick={addSkill}>Add Programming Language</button>
          <div className="form-items list" style={{color:"white"}}>
            {result.skills.map((obj) => (
                <div className="listItem form-items" key={obj.id}>{skillList.filter((elem) => elem.id == obj.id)[0].title}  <span className="yearsOfExp">Years of experience: {obj.experience} </span> 
                  <button type="button" className="buttonDlt" onClick={() => removeItem(obj.id)}>-</button>
                </div>
            ))}
            <h3 className="form-items err">{errsTechSkills.same_skill_err}</h3>
          <h3 className="form-items err">{errsTechSkills.min_skill_err}</h3>
          </div>
          
      </div>
    );
  }
  
  export default TechnicalSkillsetForm;
  