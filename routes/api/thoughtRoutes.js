// Importing the Router object from the Express.js library
const router = require('express').Router();

// Importing the necessary functions from the thoughtController.js file
const {
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// Defining the routes for handling GET and POST requests to '/api/thoughts'
router.route('/')
    .get(getThought) // GET all thoughts
    .post(createThought); // POST a new thought

// Defining the routes for handling GET, PUT, and DELETE requests to '/api/thoughts/:thoughtId'
router.route('/:thoughtId')
    .get(getSingleThought) // GET a single thought by ID
    .put(updateThought) // PUT (update) a single thought by ID
    .delete(deleteThought); // DELETE a single thought by ID

// Defining the route for handling POST requests to '/api/thoughts/:thoughtId/reactions'
router.route('/:thoughtId/reactions')
    .post(createReaction); // POST a new reaction to a thought by ID

// Defining the route for handling DELETE requests to '/api/thoughts/:thoughtId/reactions/:reactionId'
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // DELETE a reaction to a thought by ID

// Exporting the router object to be used in other parts of the application
module.exports = router;

