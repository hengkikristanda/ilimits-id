const createSubsciption = (req, res) => {
	const { email } = req.body;

	console.log(email);

	res.redirect("/");
};

// Export the function using CommonJS
exports.createSubsciption = createSubsciption;
