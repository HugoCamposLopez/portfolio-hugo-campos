/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors:{
				"black": "#111111",
				"white": "#FFFFFF",
				"grey": "#E0E0E0",
				"tial": "#18494D",
				"tial-200": "#2C7A82"
			},
			fontSize:{
				"40px": "40px",
			},
			fontFamily:{
				"mont": ["Montserrat"]
			},
			boxShadow:{
				"white-sm": "-1px 1px 3px 0px #FFFFFF",
				"tial-sm": "0px 1px 3px 1px #2C7A82"
			},
		},
	},
	plugins: [],
}
