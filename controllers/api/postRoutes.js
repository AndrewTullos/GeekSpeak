const express = require("express");
const router = express.Router();
const postController = require("../postController");

router.get("/create-post", postController.createPostForm);

module.exports = router;
