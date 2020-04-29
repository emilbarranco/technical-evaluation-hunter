// Server Package
const Express = require("express");
const App = Express();
const CORS = require("cors");

// Module Created to Perform Queries with Postgres
const pSQL = require("./connection");

// Middleware
App.use(CORS());
App.use(Express.json()); // req.body

// Listen to the server
App.listen(5000, () => {
  console.log("Server started running on port: 5000.");
});

/* --  Routes -- */

// Add an Actor to the table
App.post("/actors", async (req, res) => {
  try {
    // Destructuring the content from the body to it send through the query
    const { Fullname, Gender, Birthdate, Picture } = req.body;
    const newActor = await pSQL.query(
      "INSERT INTO ACTORS (Fullname, Gender, Birthdate, Picture) VALUES ($1, $2, $3, $4)",
      [Fullname, Gender, Birthdate, Picture]
    );
    // Retrieving the response from the server
    res.json(newActor.rows[0]);
    
  } catch (error) {
    console.error(error.message);
  }
});

// Add a Movie to the table
App.post("/movies", async (req, res) => {
  try {
    // Destructuring the content from the body to it send through the query
    const { Title, Genre, Release_Date, Picture } = req.body;
    const newMovie = await pSQL.query(
      "INSERT INTO MOVIES (Title, Genre, Release_Date, Picture) VALUES ($1, $2, $3, $4)",
      [Title, Genre, Release_Date, Picture]
    );
    // Retrieving the response from the server
    res.json(newMovie.rows[0]);
    
  } catch (error) {
    console.error(error.message);
  }
});

// Getting All Actors
App.get("/actors", async (req, res) => {
  try {
    const allActors = await pSQL.query("SELECT * FROM ACTORS");
    res.json(allActors.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Getting All Movies
App.get("/movies", async (req, res) => {
  try {
    const allMovies = await pSQL.query("SELECT * FROM MOVIES");
    res.json(allMovies.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Getting a Single Actor
App.get("/actors/:ActorID", async (req, res) => {
  try {
    const { ActorID } = req.params;
    const actor = await pSQL.query("SELECT * FROM ACTORS WHERE ActorID = $1", [
      ActorID,
    ]);
    res.json(actor.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});


// Getting a Single Movie
App.get("/actors/:MovieID", async (req, res) => {
  try {
    const { MovieID } = req.params;
    const movie = await pSQL.query("SELECT * FROM MOVIES WHERE MovieID = $1", [
      MovieID,
    ]);
    res.json(movie.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Updating an Actor
App.put("/actors/:ActorID", async (req, res) => {
  try {
    const { ActorID } = req.params;
    const { Fullname, Gender, Birthdate } = req.body;
    const updateActor = await pSQL.query(
      "UPDATE ACTORS SET Fullname = $1, Gender = $2, Birthdate = $3 WHERE ActorID = $4",
      [Fullname, Gender, Birthdate, ActorID]
    );
    res.json(updateActor.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Updating a Movie
App.put("/actors/:MovieID", async (req, res) => {
  try {
    const { MovieID } = req.params;
    const { Title, Genre, ReleaseDate } = req.body;
    const updateMovie = await pSQL.query(
      "UPDATE MOVIES SET Title = $1, Genre = $2, ReleaseDate = $3 WHERE MovieID = $4",
      [Title, Genre, ReleaseDate, MovieID]
    );
    res.json(updateMovie.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Deleting Actors from the table
App.delete("/actors/:ActorID", async (req, res) => {
  try {
    const { ActorID } = req.params;
    const deleteActor = await pSQL.query(
      "DELETE FROM ACTORS WHERE ActorID = $1",
      [ActorID]
    );
    res.json(deleteActor.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Deleting Actors from the table
App.delete("/movies/:MovieID", async (req, res) => {
  try {
    const { MovieID } = req.params;
    const deleteMovie = await pSQL.query(
      "DELETE FROM MOVIES WHERE MovieID = $1",
      [MovieID]
    );
    res.json(deleteMovie.rows);
  } catch (error) {
    console.error(error.message);
  }
});
