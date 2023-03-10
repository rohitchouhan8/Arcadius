/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			scale: {
				105: "1.05",
				125: "1.25",
			},
			fontFamily: {
				serif: ["var(--font-josefin-slab)", ...fontFamily.serif],
			},
		},
	},
	plugins: [],
}
