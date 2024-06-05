/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "0.8rem",
				md: "1.5rem",
				lg: "2.5rem",
			},
		},
		extend: {
			animation: {
				fadeIn: "fadeIn 200ms ease-in-out forwards",
				fadeOut: "fadeOut 200ms ease-in-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { transform: "translateY(-12px)", opacity: "0" },
					"100%": { transform: "translateY(0px)", opacity: "1" },
				},
				fadeOut: {
					"0%": { transform: "translateY(0px)", opacity: "1" },
					"100%": { transform: "translateY(-12px)", opacity: "0" },
				},
			},
			colors: {
				primary: {
					DEFAULT: "rgb(var(--primary-clr) / 1)",
					dark: "color-mix(in srgb, rgb(var(--primary-clr) / 1) 80%, #000)",
				},
				secondary: "rgb(var(--secondary-clr) / 1)",
			},
			fontSize: {},
			fontFamily: {
				sans: [
					"Montserrat",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
				serif: [
					"Roboto Slab",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"sans-serif",
					"Apple Color Emoji",
					"Segoe UI Emoji",
					"Segoe UI Symbol",
					"Noto Color Emoji",
				],
			},
		},
	},
	plugins: [],
};
