const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const userSchema = new Schema(
    {

        name: String,
        image: String,
        email: String,
        phone: String,
        country: String,
        region: String,
        city: String,
        address: String,
        zipcode: String,
    }
);



const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
