import React, { useState } from "react";
import "../styles/actors_style.css";

const Actors = () => {

  // Getting & Setting the values of the Form fields to send them through the server
  const [Fullname, setFullname] = useState("");
  const [Gender, setGender] = useState("");
  const [Birthdate, setBirthdate] = useState("");
  const [Picture, setPicture] = useState("");

  // Handling the form submit to insert on the table Actors
  const SubmitForm = async (e) => {
    e.preventDefault()
    try {
      const body = {
        Fullname,
        Gender,
        Birthdate,
        Picture
      }
      const response = await fetch("http://localhost:5000/actors", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Specifying the submision of JSON Data
        body: JSON.stringify(body)
      })

      console.log(response)
      console.log(Picture)

    } catch (error) {
      console.error(error.message)
    }
  }

  //Loading the Actors Picture with a listener
  window.addEventListener('load', () => {
    document.querySelector('input[type="file"]').addEventListener('change', function () {
      if (this.files && this.files[0]) {
        let prevImage = document.getElementById('prevImage')
        prevImage.src = URL.createObjectURL(this.files[0])
        prevImage.onload = LoadImage;
      }
    })
  })

  // Setting the selected image to the preview of the form and setting default width
  function LoadImage() {
    let prevImage = document.getElementById("prevImage")
    prevImage.width = "200"
    prevImage.src = this.src
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
            alt="User Profile"
            id="prevImage"
          />
          <form className="Form" onSubmit={SubmitForm}>
            <div className="Inputs">
              <input 
                required
                type="file" 
                name="Picture" 
                value={Picture}
                encType="multipart/form-data" 
                onChange={(e) => setPicture(e.target.value)} />
              <input
                required
                placeholder="Actor's Fullname"
                type="text"
                name="Fullname"
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <input
                required
                placeholder="Birth Date"
                type="date"
                name="Birthdate"
                value={Birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
              <select
                required
                name="Gender"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Select Gender</option>
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
