const { getSelectedLanguageCode } = require("../utils/commonUtils");

const renderPlatform = (req, res) => {

	const data = {
		title: "Welcome to My Website", // Page title
		selectedLanguage: getSelectedLanguageCode(req),
	};

	res.render("platform/index", data); // Render the "home.ejs" template
};

// Export the function using CommonJS
exports.renderPlatform = renderPlatform;
