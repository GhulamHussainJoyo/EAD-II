const express = require("express");
const route = express.Router();
const {
    createUser, getAllUsers, deleteUser, editUser, updateUser,
} = require("../controller/userController");


route.post('/user/edit/:id', updateUser)

route.post('/create', createUser)

route.get('/users', getAllUsers)

route.get('/user/delete/:id', deleteUser)
route.get('/user/edit/:id', editUser)
module.exports = route;
