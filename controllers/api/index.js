const router = require("express").Router();
const userRoutes = require("../controllers/userRoutes");
const postRoutes = require("../controllers/postRoutes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
