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

     // Deleting a Movie
    const delMovie = async (ID) => {
        try {
        const deleteMovie = await fetch(`http://localhost:5000/movies/${ID}`, {
            method: "DELETE"
        })
        console.log(deleteMovie)
        window.location.reload()
        } catch (error) {
        console.log(error.message)
        }
    }

    const Movies = movies.map((movies) =>
        <div className="Movie" key={movies.movieid}>
            <img src="https://source.unsplash.com/150x150/?person" alt="Movie Picture" />
            <div className="Details">
                <h3>{movies.title}</h3>
                <h4>{movies.genre}</h4>
                <h4>{movies.release_date}</h4>
                <div className="Options">
                    <button onClick={() => delMovie()}><ion-icon name="create-outline"></ion-icon></button>
                    <button onClick={() => delMovie(movies.movieid)}><ion-icon name="close-outline"></ion-icon></button>
                </div>
            </div>
        </div>
    );

    // Getting & Setting the values of the Form fields to send them through the server
    const [Title, setTitle] = useState("");
    const [Genre, setGenre] = useState("");
    const [Release_Date, setRelease_Date] = useState("");
    const [Picture, setPicture] = useState("");

    // Handling the form submit to insert on the table Movies
    const Submit = async (e) => {
        e.preventDefault()
        try {
            const body = {
                Title,
                Genre,
                Release_Date,
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
        window.location.reload(); 
    }

    //Loading the Movie Picture with a listener
    window.addEventListener('load', () => {
        document.querySelector('input[type="file"]').addEventListener('change', function () {
            if (this.files && this.files[0]) {
                let movImage = document.getElementById('movImage')
                movImage.src = URL.createObjectURL(this.files[0])
                movImage.onload = LoadImage;
            }
        })
    })

    // Setting the selected image to the preview of the form and setting default width
    function LoadImage() {
        let movImage = document.getElementById("movImage")
        movImage.width = "150"
        movImage.height = "150"
        movImage.value = this.src
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
                        id="movImage"
                    />
                    <form className="Form" onSubmit={Submit}>
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
                                type="date"
                                name="Release_Date"
                                value={Release_Date}
                                onChange={(e) => setRelease_Date(e.target.value)}
                            />
                            <select
                                required
                                name="Genre"
                                value={Genre}
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option>Select Genre</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Romance">Romance</option>
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
