import React from "react"


function SelectedItem({item}) {
    return (
      <div className="selectedItem">
        <div className="flexBox">
          <div className="flexBoxItem flexBox">Personal Information
            <div className="personalInfoTitles flexBoxItem flexCol">
              <p>First Name</p>
              <p>Last Name</p>
              <p>E Mail</p>
              <p>Phone</p>
            </div>
            <div className="personalInfoValues flexBoxItem flexCol">
              <p>{item.first_name}</p>
              <p>{item.last_name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          </div>
          <div className="flexBoxItem">Skillset
    
          </div>
        </div>
        <div className="flexBox">
          <div className="flexBoxItem">Covid Situation

          </div>
          <div className="flexBoxItem">Insigts
    
          </div>
        </div>
      </div>
    );
  }
  
  export default SelectedItem;
  