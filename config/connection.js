// Importing the necessary modules from Mongoose
const { connect, connection } = require('mongoose');

// Setting the connection string to either the value of the environment variable "MONGODB_URI"
// or to the default MongoDB connection URL 'mongodb://localhost:27017/socialDB'
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

// Connecting to the MongoDB instance using the connection string and options
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Exporting the Mongoose connection object to be used in other parts of the application
module.exports = connection;
