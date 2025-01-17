/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{html,ejs}"],
	theme: {
		// screens: {
		// 	sm: "480px",
		// 	// => @media (min-width: 480px) { ... }

		// 	md: "768px",
		// 	// => @media (min-width: 768px) { ... }

		// 	lg: "1024px",
		// 	// => @media (min-width: 1024px) { ... }

		// 	xl: "1280px",
		// 	// => @media (min-width: 1280px) { ... }
		// 	"2xl": "1536px",
		// },
		extend: {
			fontFamily: {
				sans: ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
				inter: ['"Inter"', "sans-serif"],
			},
			colors: {
				primary: "#58b94f",
				primary_lighter: "#ceebcc",
				primary_darker: "#1C4927",
				secondary: "#fcb040",
				line: "#e0e0e0",
				info_lighter: "#f1f1f1",
				info: "#333333",
				info_darker: "#F1F5F9",
				danger: "#991b1b",
				telegram: "#24A1DE",
				skype: "#00aff0"
			},
			maxWidth: {
				"1/3": "33%",
				"3/4": "75%",
				"9/1": "90%",
				10: "10px",
				1920: "1920px",
			},
			maxHeight: {
				400: "25rem",
				480: "30rem",
				640: "40rem",
				768: "48rem",
				800: "50rem",
				960: "60rem",
				1040: "65rem",
				1200: "75rem",
				1536: "96rem",
				7680: "480rem",
			},
			height: {
				400: "25rem",
				480: "30rem",
				560: "35rem",
				640: "40rem",
				768: "48rem",
				800: "50rem",
				960: "60rem",
				1040: "65rem",
				1200: "75rem",
				1536: "96rem",
				7680: "480rem",
			},
			width: {
				480: "30rem",
				200: "50rem",
				960: "60rem",
				1200: "75rem",
				4800: "300rem",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
