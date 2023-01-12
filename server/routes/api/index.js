const router = require("express").Router();
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");
const userRoutes = require("./userRoutes");
//collecting the routes
router.use("/chats", chatRoutes);
router.use("/message", messageRoutes);
router.use("/user", userRoutes);

module.exports = router;
