const express = require("express");
const route = express.Router();


route.get('/', (req, res) => {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
})

module.exports = route;
