const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const authRoutes = require("./authRoutes");

router.use("/users", userRoutes);
router.use(postRoutes);
router.use(authRoutes);

module.exports = router;
