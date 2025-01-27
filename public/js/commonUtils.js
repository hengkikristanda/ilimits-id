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
	
});

function validateEmailInput(input) {
	// Regular expression to validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(input);
}
