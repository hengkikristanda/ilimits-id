document.addEventListener("DOMContentLoaded", () => {
	function reveal() {
		var reveals = document.querySelectorAll(".reveal");

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add("active");
			} /* else {
                reveals[i].classList.remove("active");
            } */
		}
	}

	(function (d, w, c) {
		w.BrevoConversationsID = "64a65edf7814aa4d685e67dc";
		w[c] =
			w[c] ||
			function () {
				(w[c].q = w[c].q || []).push(arguments);
			};
		var s = d.createElement("script");
		s.async = true;
		s.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
		if (d.head) d.head.appendChild(s);
	})(document, window, "BrevoConversations");

	window.addEventListener("scroll", reveal);

	const numberElement = document.querySelectorAll(".enforce-number");
	numberElement.forEach((item) => {
		item.addEventListener("input", enforceNumberInput);
	});
});

function validateEmailInput(input) {
	// Regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(input);
}

function enforcePhoneNumber(input) {
	// Remove any character that is not a digit
	let cleaned = ("" + input.value).replace(/\D/g, "");

	// Match the cleaned number to the pattern (XXX) XXX-XXXX
	let match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

	if (match) {
		input.value = !match[2]
			? match[1]
			: "(" + match[1] + ") " + match[2] + (match[3] ? "-" + match[3] : "");
	}
}

function enforceNumberInput() {
	this.value = this.value.replace(/[^0-9]/g, "");
}