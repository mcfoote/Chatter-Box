const express = require("express");
const {
  getMesseges,
  sendMessage,
} = require("../../controllers/messageControllers");
const { bearerAuth } = require("../../util/authMiddleware");

const router = express.Router();
//collecting the routes
router.route("/:chatId").get(bearerAuth, getMesseges);
router.route("/").post(bearerAuth, sendMessage);

module.exports = router;
