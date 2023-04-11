// Importing the Router object from the Express.js library
const router = require('express').Router();

// Importing the userRoutes object from the userRoutes.js file
const userRoutes = require('./userRoutes');

// Importing the thoughtRoutes object from the thoughtRoutes.js file
const thoughtRoutes = require('./thoughtRoutes');

// Adding a prefix of '/users' to all of the routes in the userRoutes object
router.use('/users', userRoutes);

// Adding a prefix of '/thoughts' to all of the routes in the thoughtRoutes object
router.use('/thoughts', thoughtRoutes);

// Exporting the router object to be used in other parts of the application
module.exports = router;
