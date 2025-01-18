const { getSelectedLanguageCode } = require("../utils/commonUtils");

const renderTrading = (req, res) => {

	const data = {
		title: "Welcome to My Website", // Page title
		selectedLanguage: getSelectedLanguageCode(req),
	};

	res.render("trading/index", data); // Render the "home.ejs" template
};

const renderTradingAccount = (req, res) => {
	const accountType = req.params.accountType;

	let renderPage = "trading";

	if (accountType.localeCompare("stp") == 0) {
		renderPage += "/stp";
	} else if (accountType.localeCompare("ecn") == 0) {
		renderPage += "/ecn";
	} else if (accountType.localeCompare("islamic") == 0) {
		renderPage += "/islamic";
	}

	const data = {
		title: "Welcome to My Website", // Page title
		user: req.session.user || null, // Example: Check if a user is logged in
		selectedLanguage: lang.toUpperCase(),
	};

	res.render(renderPage, data); // Render the "home.ejs" template
};

// Export the function using CommonJS
module.exports = {
	renderTrading,
	renderTradingAccount,
};
