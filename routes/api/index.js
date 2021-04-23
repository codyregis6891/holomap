const path = require("path");
const router = require("express").Router();
const postRoutes = require("./posts");
const characterRoutes = require("./character");
const planetRoutes = require("./planet");
const userRoutes = require("./users")

// Post routes
router.use("/posts", postRoutes);

router.use("/character", characterRoutes);

router.use("/planet", planetRoutes);

router.use("/users", userRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;


// PLANET TABLE HAS NO UNIQUE ID #!!!