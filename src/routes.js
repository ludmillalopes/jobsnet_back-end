const express = require('express');
const CandidateController = require('./controllers/CandidateController');
const UserController = require('./controllers/UserController');
const routes = new express.Router();

routes.post('/register', CandidateController.register);
routes.post('/signUp', UserController.register);


module.exports = routes;