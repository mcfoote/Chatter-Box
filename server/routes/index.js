const router = require("express").Router();
const apiRoutes = require("./api");
//lets us collects the routes on index
router.use("/api", apiRoutes);

router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
