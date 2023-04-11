// Importing the express library and the database connection object from the ./config/connection.js file
const express = require("express");
const db = require("./config/connection");

// Importing the routes object from the ./routes/index.js file
const routes = require("./routes");

// Defining the port number for the server to listen on
const PORT = process.env.PORT || 3001;

// Creating a new instance of the Express application
const app = express();

// Adding middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Adding middleware to parse incoming requests with url-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Adding the routes defined in the routes object to the application
app.use(routes);

// Setting up the server to listen on the specified port number and log a message to the console when it starts running
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
