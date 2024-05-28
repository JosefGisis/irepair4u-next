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
	typography: {
		fontFamily: "custom-font sans-serif",
		h1: {
			fontFamily: "custom-font serif",
		},
		h2: {
			fontFamily: "custom-font serif",
		},
		h3: {
			fontFamily: "custom-font serif",
		},
		h4: {
			fontFamily: "custom-font serif",
		},
		h5: {
			fontFamily: "custom-font serif",
		},
		h6: {
			fontSize: "1.5rem",
			fontWeight: 500,
			fontFamily: "custom-font serif",
		},
		body1: {
			fontFamily: "custom-font sans-serif",
		},
		body2: {
			fontFamily: "custom-font sans-serif",
		},

	}
})
