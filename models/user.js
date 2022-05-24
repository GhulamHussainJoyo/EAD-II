const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrpt = require('bcrypt');
const jwt = require("jsonwebtoken");


const userSchema = new Schema(
    {

        name: String,
        email: String,
        phone: String,
        country: String,
        region: String,
        city: String,
        address: String,
        zipcode: String,
    }
);

userSchema.pre("save", function (next) {

    const user = this;
    // console.log("pre user", user);
    bcrpt.hash(this.password, 10, (error, hash) => {
        if (error) next(error)
        user.password = hash;
        next();
    })
});
userSchema.methods.getJwtToken = function () {
    const user = this;
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: Date.now() * 24 * 60 * 60 * 1000
    });

}

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
