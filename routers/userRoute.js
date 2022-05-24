const express = require("express");
const route = express.Router();
const {
    createUser, getAllUsers, deleteUser, editUser,
} = require("../controller/userController");


route.post('/create', createUser)

route.get('/users', getAllUsers)

route.get('/user/delete/:id', deleteUser)
route.get('/user/edit/:id', editUser)
module.exports = route;
