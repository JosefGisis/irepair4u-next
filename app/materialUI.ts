"use client"

import { Theme } from "@emotion/react"
import { createTheme } from "@mui/material/styles"

export const theme: Theme = createTheme({
	palette: {
		primary: {
			main: "#FF1E46",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#D2D2D2",
			contrastText: "#000000",
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
				@font-face {
					font-family: 'custom-font';
					src: url('fonts/Atkinson-Hyperlegible-Regular-102.otf') format('opentype');
					font-weight: normal;
					font-style: normal;
					font-display: swap;
				}


				@font-face {
					font-family: 'custom-font';
					src: url('fonts/Atkinson-Hyperlegible-Bold-102.otf') format('opentype');
					font-weight: bold;
					font-style: normal;
					font-display: swap;
				}


				@font-face {
					font-family: 'custom-font';
					src: url('fonts/Atkinson-Hyperlegible-Italic-102.otf') format('opentype');
					font-weight: normal;
					font-style: italic;
					font-display: swap;
				}


				@font-face {
					font-family: 'custom-font';
					src: url('fontss/Atkinson-Hyperlegible-BoldItalic-102.otf') format('opentype');
					font-weight: bold;
					font-style: italic;
					font-display: swap;
				}
			`,
		},
	},
	typography: {
		fontFamily: "custom-font, sans-serif",
		h1: {
			fontSize: "3rem",
			fontFamily: "custom-font, sans-serif",
		},
		h2: {
			fontSize: "3rem",
			fontFamily: "custom-font, sans-serif",
		},
		h3: {
			fontSize: "2rem",
			fontFamily: "custom-font, sans-serif",
		},
		h4: {
			fontSize: "2rem",
			fontFamily: "custom-font, sans-serif",
		},
		h5: {
			fontWeight: 700,
			fontSize: "1.5rem",
			fontFamily: "custom-font, sans-serif",
		},
		h6: {
			fontSize: "1.3rem",
			fontWeight: 500,
			fontFamily: "custom-font, sans-serif",
		},
		body1: {
			fontSize: "1.1rem",
			fontFamily: "custom-font, sans-serif",
		},
		body2: {
			fontSize: "1rem",
			fontWeight: 500,
			fontFamily: "custom-font, sans-serif",
		},
		subtitle1: {
			fontWeight: 700,
			fontSize: "1.2rem",
			fontFamily: "custom-font, sans-serif",
		},
		subtitle2: {
			fontSize: "1.2rem",
			fontFamily: "custom-font, sans-serif",
		},
		button: {
			fontSize: "1.1rem",
			fontFamily: "custom-font, sans-serif",
		},	

	},
})
