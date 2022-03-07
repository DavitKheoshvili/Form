import React, {useState, useEffect} from "react"

import axios from "axios";


function TechnicalSkillsetForm({result, setResult, errsTechSkills, setErrsTechSkills}) {
    const [skillList, setSkillList] = useState([{id: "1", title: "HTML"}]);
    useEffect(() => {
      axios.get("https://bootcamp-2022.devtest.ge/api/skills")
      .then(res => {
        setSkillList(res.data)
      })
    }, [])
    
    const [skill, setSkill] = useState({id:"1"});
    
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
      <> 
          <select onChange={addID}>
            {skillList.map(skill => (
              <option key={skill.id} value={skill.id}>{skill.title}</option>
            ))}
          </select>
          <input type={"text"} placeholder="Experience Duration In Years" onChange={addExperience}></input>
          <button onClick={addSkill}>Add Programming Language</button>
          <ul>
            {result.skills.map((obj) => (
                <li key={obj.id}>{skillList.filter((elem) => elem.id == obj.id)[0].title} Years of experience: {obj.experience}  
                  <button type="button" onClick={() => removeItem(obj.id)}>Delete</button>
                </li>
            ))}
          </ul>
          <h1>{errsTechSkills.same_skill_err}</h1>
          <h1>{errsTechSkills.min_skill_err}</h1>
      </>
    );
  }
  
  export default TechnicalSkillsetForm;
  