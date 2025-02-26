/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind knows where to scan for class names
	],
	theme: {
		extend: {
			screens: {
				'custom': '1390px',
				'custom-lg': '1000px'// custom breakpoint
			}
		},
	},
	plugins: [
		require('daisyui'),
	],
}