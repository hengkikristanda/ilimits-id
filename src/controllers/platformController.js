const renderPlatform = (req, res) => {
	const data = {
		title: "Welcome to My Website", // Page title
		user: req.session.user || null, // Example: Check if a user is logged in
	};

	res.render("platform/index", data); // Render the "home.ejs" template
};

// Export the function using CommonJS
exports.renderPlatform = renderPlatform;
