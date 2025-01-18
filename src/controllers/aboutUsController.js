const { getSelectedLanguageCode } = require("../utils/commonUtils");

const renderAboutUs = (req, res) => {
	const data = {
		title: "Welcome to My Website", // Page title
		selectedLanguage: getSelectedLanguageCode(req),
	};

	res.render("aboutUs", data); // Render the "home.ejs" template
};

// Export the function using CommonJS
exports.renderAboutUs = renderAboutUs;
