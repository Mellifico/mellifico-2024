/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		darkMode: 'class',
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				light: '#FDEAAF',
				md: '#FCD55F',
				dark: '#F0B505'
			},
			secondary: {
				light: '#AC9486',
				md: '#7c6354',
				dark: '#493A32',
				darker: '#140F00'
			},
			tertiary: {
				light: '#F18E55',
				md: '#CA5310',
				dark: '#84370B'
			},
			accent: {
				light: '#00A676',
				md: '#00A676',
				dark: '#00A676'
			}
		},
	},

	plugins: []
};

module.exports = config;
