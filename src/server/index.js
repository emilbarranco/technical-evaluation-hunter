// Server Package
const Express = require("express");
const App = Express();
const CORS = require("cors");

// Module Created to Perform Queries with Postgres
const Pool = require("./connection");

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
    const { Fullname, Gender, Birthdate } = req.body;
    const newActor = await Pool.query(
      "INSERT INTO ACTORS (Fullname, Gender, Birthdate) VALUES ($1, $2, $3) RETURNING *",
      [Fullname, Gender, Birthdate]
    );
    // Retrieving the response from the server
    res.json(newActor.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Getting All Actors
App.get("/actors", async (req, res) => {
  try {
    const allActors = await Pool.query("SELECT * FROM ACTORS");
    res.json(allActors.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Getting a Single Actor
App.get("/actors/:ActorID", async (req, res) => {
  try {
    const { ActorID } = req.params;
    const actor = await Pool.query("SELECT * FROM ACTORS WHERE ActorID = $1", [
      ActorID,
    ]);
    res.json(actor.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Updating an Actor
App.put("/actors/:ActorID", async (req, res) => {
  try {
    const { ActorID } = req.params;
    const { Fullname, Gender, Birthdate } = req.body;
    const updateActor = await Pool.query(
      "UPDATE ACTORS SET Fullname = $1, Gender = $2, Birthdate = $3 WHERE ActorID = $4",
      [Fullname, Gender, Birthdate, ActorID]
    );
    res.json(updateActor.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Deleting Actors from the table
App.delete("/actors/:ActorID", async (req, res) => {
  try {
    const { ActorID } = req.params;
    const deleteActor = await Pool.query(
      "DELETE FROM ACTORS WHERE ActorID = $1",
      [ActorID]
    );
    res.json(deleteActor.rows);
  } catch (error) {
    console.error(error.message);
  }
});
