/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind knows where to scan for class names
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui'), // Add DaisyUI here
	],
}