const express = require("express");
const route = express.Router();
const {
    createUser, getAllUsers,
} = require("../controller/userController");


route.post('/create', createUser)

route.get('/users', getAllUsers)
module.exports = route;
