import React, { useState } from "react";
import "../styles/actors_style.css";

const Actors = () => {

  // Getting & Setting the values of the Form fields to send them through the server
  const [fullname, setFullname] = useState();
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  // Handling the form submit to insert on the table Actors
  const SubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {
        fullname,
        gender,
        birthdate
      }
      const response = await fetch("http://localhost:5000/actors", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Specifying the submision of JSON Data
        body: JSON.stringify(body)
      })

      console.log(response.body, body.fullname, body.gender, body.birthdate)

    } catch (error) {
      console.error(error.message)
    }
  }

  /*const Actors = actors.map((data) =>  
        <div className="Actor">
            <img src="https://placehold.it/100x100/" alt="User Profile"/>
            <div className="Details">
                <h3>{data.Fullname}</h3>
                <h4>{data.Gender}</h4>
                <h4>{data.Birthdate}</h4>
            </div>
        </div> 
    );*/

  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div className="Grid">
        <div className="Box">
          <img
            src="https://placehold.it/150x150/"
            id="uploadPreview"
            alt="User Profile"
          />
          <form className="Form" method="post" onSubmit={SubmitForm}>
            <div className="Inputs">
              <input type="file" name="Picture" id="Picture" />
              <input
                placeholder="Actor's Fullname"
                type="text"
                name="Fullname"
                onChange={(e) => setFullname(e.target.value)}
              />
              <input
                placeholder="Birth Date"
                type="date"
                name="Birthdate"
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <select
                name="Gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <button className="AddActor">Add Actor</button>
            </div>
          </form>
        </div>

        <div className="Divider">
          <h1>Actors</h1>
          <hr />
        </div>
        <div className="Actors">{}</div>
      </div>
    </div>
  );
};

export default Actors;
