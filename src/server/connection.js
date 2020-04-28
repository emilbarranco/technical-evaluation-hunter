const { Pool } = require("pg");

// Connection to the Postgres Database
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "sql",
  port: 5432,
  database: "movie_manager",
});

module.exports = pool;
