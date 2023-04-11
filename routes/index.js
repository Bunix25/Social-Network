// Importing the Router object from the Express.js library
const router = require('express').Router();

// Importing all of the API routes from the /api directory
const apiRoutes = require('./api');

// Adding a prefix of '/api' to all of the API routes imported from the 'api' directory
router.use('/api', apiRoutes);

// Creating a fallback route to handle any requests that do not match an existing route
router.use((req, res) => res.send('Wrong route!'));

// Exporting the router object to be used in other parts of the application
module.exports = router;
