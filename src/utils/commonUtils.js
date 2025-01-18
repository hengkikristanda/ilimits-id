const languageCode = ["EN", "ID", "MS"];

function getSelectedLanguageCode(req) {
	let lang = req.query.lang || "EN";
	if (!languageCode.includes(lang.toUpperCase())) {
		lang = "EN";
	}
	return lang.toUpperCase();
}

module.exports = {
	getSelectedLanguageCode,
};
