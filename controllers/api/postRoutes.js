const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const BlogPost = require("../models/BlogPost"); // Adjust the path as per your project structure

router.get("/", postController.getPostPage);

// Route to fetch and display blog posts
// router.get("/blog-posts", async (req, res) => {
// 	try {
// 		const blogPosts = await BlogPost.findAll();
// 		res.render("blogPosts", { posts: blogPosts }); // 'blogPosts' is your Handlebars template
// 	} catch (error) {
// 		console.error("Error fetching blog posts:", error);
// 		res.status(500).send("Error fetching blog posts");
// 	}
// });

module.exports = router;
