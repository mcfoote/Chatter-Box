const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeGroupMembers,
  addIntoGroup,
  renameGroup,
} = require("../../controllers/chatControllers");
const { bearerAuth } = require("../../util/authMiddleware");

const router = express.Router();

router.route("/").post(bearerAuth, accessChat);
router.route("/").get(bearerAuth, fetchChats);
router.route("/group").post(bearerAuth, createGroupChat);
router.route("/rename").put(bearerAuth, renameGroup);
router.route("/groupremove").put(bearerAuth, removeGroupMembers);
router.route("/groupadd").put(bearerAuth, addIntoGroup);

module.exports = router;
