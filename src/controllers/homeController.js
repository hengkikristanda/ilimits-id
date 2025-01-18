const { getSelectedLanguageCode } = require("../utils/commonUtils");

const renderHomePage = (req, res) => {

	let lang = req.query.lang || "EN";

	const languageCode = getSelectedLanguageCode(req);

	const data = {
		title: "Welcome to My Website", // Page title
		selectedLanguage: languageCode,
	};

	res.render("home", data); // Render the "home.ejs" template
};

// Export the function using CommonJS
exports.renderHomePage = renderHomePage;
