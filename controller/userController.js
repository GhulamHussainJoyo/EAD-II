const User = require("../models/user");
const bcrypt = require("bcrypt");
const path = require("path");




exports.createUser = async (req, res) => {

  console.log("inside user");
  console.log(req.files);
  console.log(req.body);
  const img = req.files.img;
  img.mv(path.resolve(__dirname, '../assets/image', img.name), async (err) => {
    if (err) return res.redirect('back')

    const data = {
      ...req.body,
      image:
        req.files?.img.name
    };

    console.log("data", data);
    const user = await User.create(data)
    console.log(user);
    if (user) {
      return res.redirect('/users')
    }
  })
};

exports.getAllUsers = async (req, res) => {

  const users = await User.find()
  return res.render('users', { users })
}

exports.deleteUser = async (req, res) => {

  const id = req.params.id;
  const users = await User.findByIdAndDelete(id)
  return res.redirect('/users')
}

exports.editUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id)
  return res.render('edit', { user })
}



