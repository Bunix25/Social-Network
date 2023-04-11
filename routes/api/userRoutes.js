// Importing the Router object from the Express.js library
const router = require('express').Router();

// Importing the necessary functions from the userController.js file
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// Defining the routes for handling GET and POST requests to '/api/users'
router.route('/')
    .get(getUser) // GET all users
    .post(createUser); // POST a new user

// Defining the routes for handling GET, PUT, and DELETE requests to '/api/users/:userId'
router.route('/:userId')
    .get(getSingleUser) // GET a single user by ID
    .put(updateUser) // PUT (update) a single user by ID
    .delete(deleteUser); // DELETE a single user by ID

// Defining the routes for handling POST and DELETE requests to '/api/users/:userId/friends/:friendId'
router.route('/:userId/friends/:friendId')
    .post(addFriend) // POST a new friend for a user by ID
    .delete(deleteFriend); // DELETE a friend from a user by ID

// Exporting the router object to be used in other parts of the application
module.exports = router;
