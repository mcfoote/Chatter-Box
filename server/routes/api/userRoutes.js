const express = require("express");
const {
  createUsers,
  loginUser,
  getAllUsers,
} = require("../../controllers/userControllers");
const { bearerAuth } = require("../../util/authMiddleware");

const router = express.Router();
//collecting routes
router.route("/").get(bearerAuth, getAllUsers);
router.route("/").post(createUsers);
router.post("/login", loginUser);

module.exports = router;
