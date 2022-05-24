const express = require("express");
const route = express.Router();
const User = require('../models/user')

route.get('/', (req, res) => {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
});



module.exports = route;
