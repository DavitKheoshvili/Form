import React, {useState, useEffect} from "react"

import axios from "axios";


function TechnicalSkillsetForm({result, setResult}) {
    const [skillList, setSkillList] = useState([]);
    useEffect(() => {
      axios.get("https://bootcamp-2022.devtest.ge/api/skills")
      .then(res => {
        setSkillList(res.data)
      })
    }, [])
    
    const [skill, setSkill] = useState({});
    
    const addSkill = () => {
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
            <option value="skills" selected={true} disabled="disabled">Skills</option>
            {skillList.map(skill => (
              <option key={skill.id} value={skill.id}>{skill.title}</option>
            ))}
          </select>
          <input type={"text"} placeholder="Experience Duration In Years" onChange={addExperience}></input>
          <button onClick={addSkill}>Add Programming Language</button>
          <ul>
            {result.skills.map((obj) => (
                <li key={obj.id}>id: {obj.id} experience: {obj.experience}  
                  <button type="button" onClick={() => removeItem(obj.id)}>Delete</button>
                  <p>{JSON.stringify(result.skills)}</p>
                </li>
            ))}
          </ul>
      </>
    );
  }
  
  export default TechnicalSkillsetForm;
  