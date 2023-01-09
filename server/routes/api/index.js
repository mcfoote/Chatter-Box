const router = require('express').Router();
const userRoutes = require("./userRoutes");
const chatRoutes = require("./chatRoutes");
const messageRoutes = require("./messageRoutes");
//group all of the routes together
router.use("/user", userRoutes);
router.use("/chat", chatRoutes);
router.use("/message", messageRoutes);

module.exports = router;