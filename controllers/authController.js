exports.logout = (req, res) => {
	// Clear the user session (assuming you're using express-session middleware)
	req.session.destroy((err) => {
		if (err) {
			console.error("Error destroying session:", err);
		}
		// Redirect to the homepage or login page
		res.redirect("/");
	});
};

// req.session.save(() => {
// 	req.session.user_id = userData.id;
// 	req.session.logged_in = true;

// 	res.json({ user: userData, message: "You are now logged in!" });
// });
