// Server Package
const Express = require('express')
const App = Express()
const CORS = require('cors')

// Module Created to Perform Queries with Postgres
const Pool = require('./connection')

// Middleware 
App.use(CORS()) 
App.use(Express.json()) // req.body

// Listen to the server
App.listen(5000, () => {
    console.log('Server started running on port: 5000.')
})

/* --  Routes -- */

// Add an Actor to the table
App.post('/actors', async (req, res) => {
    try {

        // Destructuring the content from the body to send through the query
        const { Fullname, Gender, Birthdate } = req.body
        const newActor = await Pool.query(
            'INSERT INTO ACTORS (Fullname, Gender, Birthdate) VALUES ($1, $2, $3) RETURNING *', 
            [Fullname, Gender, Birthdate]
        )

        res.json(newActor.rows[0])

    } catch (error) {
        console.error(error.message)
    }
})

// Getting All Actors
App.get('/actors', async (req, res) => {
    try {
        const allActors = await Pool.query("SELECT * FROM ACTORS")
        res.json(allActors.rows)
    } catch (error) {
        console.error(error.message)
    }
});

// Getting a Single Actor


// Deleting Actors from the table

