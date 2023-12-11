/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors:{
				"black": "#111111",
				"white": "#FFFFFF",
				"grey": "#E0E0E0"
			},
			fontSize:{
				"40px": "40px",
			},
			fontFamily:{
				"mont": ["Montserrat"]
			},
		},
	},
	plugins: [],
}
