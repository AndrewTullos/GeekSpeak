const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Logout route
router.get("/logout", authController.logout);

// Dashboard route
router.get("/dashboard", authMiddleware.isAuthenticated, (req, res) => {
	// Render the dashboard page
	res.render("dashboard");
});

module.exports = router;
