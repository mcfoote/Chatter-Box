const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//searches all users
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});

//creates new users
const registerUser = asyncHandler(async (req, res) => {
  //pulls new info from inputs
  const { name, email, password, pic } = req.body;
  //checks if the info doesnt exist if so send error code then send error
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  //if all the Feilds are inputed then continue
  //checks if the email already exist
  const userExists = await User.findOne({ email });
  //if the user does then send an error code
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //if user doesnt exist the we will create it
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  //after the user has been created then we send a succses and report a .json with the login info
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      //generate token that we will use for later on in bearer authentication
      token: generateToken(user._id),
    });
  } else {
    //if something goes wrong then we will send an error
    res.status(400);
    throw new Error("User not found");
  }
});

//we will use this route to login users
const authUser = asyncHandler(async (req, res) => {
  //first we will recieve the email and password
  const { email, password } = req.body;
  //check our database for a user with the same email
  const user = await User.findOne({ email });
  //if this succededs then we wait to match a password with our hashed password
  //if succsesfull then we send a res.json with our token for authentication
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
    //if something is incorrect we will send an error with description that the email and password
    //are incorrect for security reasons
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { allUsers, registerUser, authUser };
