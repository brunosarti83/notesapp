const { Router } = require('express');
const postUser = require('../controllers/users/postUser');
const deleteUser = require('../controllers/users/deleteUser');
const loginUser = require('../controllers/users/loginUser');

const usersRouter = Router();

usersRouter.post('/login', loginUser);
usersRouter.post('/register', postUser);
usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;