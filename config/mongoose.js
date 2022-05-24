const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ead");
const db = mongoose.connection;

db.on("error", () => {
  console.log("there is an error connecting");
});

db.once("open", () => {
  console.log("database connection is opened");
});

module.exports = mongoose;
