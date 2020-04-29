import React, { useState, useEffect } from "react";
import "../styles/movies_style.css";

const Movies = () => {
    window.document.title = "Movie Manager - Movies"


    // Retriving all records from the table as JSON data
    const [movies, setMovies] = useState([])

    const LoadData = async () => {
        try {

            const response = await fetch("http://localhost:5000/movies")
            const JSON_Data = await response.json()
            setMovies(JSON_Data)
            console.log(JSON_Data)

        } catch (error) {
            console.error(error.message)
        }
    }

    // Performing one request to get the data from the table
    useEffect(() => {
        LoadData()
    }, [])

    const Movies = movies.map((movies) =>
        <div className="Movies" key={movies.movieid}>
            <img src="https://source.unsplash.com/150x150/?person" alt="Movie Picture" />
            <div className="Details">
                <h3>{movies.title}</h3>
                <h4>{movies.genre}</h4>
                <h4>{movies.releasedate}</h4>
            </div>
        </div>
    );

    // Getting & Setting the values of the Form fields to send them through the server
    const [Title, setTitle] = useState("");
    const [Genre, setGenre] = useState("");
    const [ReleaseDate, setReleaseDate] = useState("");
    const [Picture, setPicture] = useState("");

    // Handling the form submit to insert on the table Movies
    const SubmitForm = async (e) => {
        e.preventDefault()
        try {
            const body = {
                Title,
                Genre,
                ReleaseDate,
                Picture
            }
            const response = await fetch("http://localhost:5000/movies", {
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

    //Loading the Movie Picture with a listener
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
                <div className="Container">
                    <img
                        src="https://placehold.it/150x200/"
                        alt="Movie Picture"
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
                                placeholder="Movie's Title"
                                type="text"
                                name="Title"
                                value={Title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input
                                required
                                placeholder="Release Date"
                                type="text"
                                name="ReleaseDate"
                                value={ReleaseDate}
                                onChange={(e) => setReleaseDate(e.target.value)}
                            />
                            <select
                                required
                                name="Genre"
                                value={Genre}
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option>Select Genre</option>
                                <option value="Female">Sci-Fi</option>
                                <option value="Female">Action</option>
                                <option value="Female">Comedy</option>
                                <option value="Female">Adventure</option>
                                <option value="Female">Romance</option>
                            </select>
                            <button className="AddMovie">Add Movie</button>
                        </div>
                    </form>
                </div>

                <div className="Divider">
                    <h1>Movies</h1>
                    <hr />
                </div>
                <div className="Movies">{Movies}</div>
            </div>
        </div>
    );
};

export default Movies;
