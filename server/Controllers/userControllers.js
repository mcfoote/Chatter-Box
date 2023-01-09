const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

//getting all users
const getAllUsers = asyncHandler(async (req, res) => {
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

//we will create users here
const createUsers = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  // see if the feilds were entered correctly
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("createUsers recieved no data");
  }

  const userExists = await User.findOne({ email });
  //if the user exist we stop here
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  //create the user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  //then send a succses code and generate a token
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
//we will login our user
const loginUser = asyncHandler(async (req, res) => {
  //gather our info and set them to varibles to be used later
  const { email, password } = req.body;
  //see if we can find them in the db by email
  const user = await User.findOne({ email });
  //user does actully exist and the password matches the hashed password then we send them through
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { getAllUsers, createUsers, loginUser };
