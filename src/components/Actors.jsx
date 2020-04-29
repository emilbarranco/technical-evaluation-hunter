import React, { useState, useEffect } from "react";
import "../styles/actors_style.css";

const Actors = () => {
  window.document.title = "Movie Manager - Actors"


  // Retriving all records from the table as JSON data
  const [actors, setActors] = useState([])

  const LoadData = async () => {
    try {

      const response = await fetch("http://localhost:5000/actors")
      const JSON_Data = await response.json()
      setActors(JSON_Data)
      console.log(JSON_Data)

    } catch (error) {
      console.error(error.message)
    }
  }

  // Performing one request to get the data from the table
  useEffect(() => {
    LoadData()
  }, [])

  const Actors = actors.map((actors) =>
    <div className="Actor" key={actors.actorid}>
      <img src="https://source.unsplash.com/150x150/?person" alt="User Profile" />
      <div className="Details">
        <h3>{actors.fullname}</h3>
        <h4>{actors.gender}</h4>
        <h4>{actors.birthdate}</h4>
      </div>
    </div>
  );

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
    prevImage.value = this.src
  }

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
                src={Picture}
                encType="multipart/form-data"
                onChange={(e) => setPicture(e.target.currentSrc)} />
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
        <div className="Actors">{Actors}</div>
      </div>
    </div>
  );
};

export default Actors;
