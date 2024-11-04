import "../styles/global.css"

import type { Metadata } from "next"

import { ThemeProvider } from "@mui/material/styles"
import { theme } from "./materialUI"

import { Analytics } from "@vercel/analytics/react"

// This import is required to import styles from survey-core.
import "survey-core/defaultV2.min.css"

export const metadata: Metadata = {
	title: "iRepair4u",
	description:
		"iRepair4U is your one stop shop for phone and tablet repairs in Lakewood, New Jersey and neighboring communities.",
	authors: {
		name: "Josef Gisis",
	},
	keywords: [
		"Phone Repair",
		"Phone Repair Lakewood",
		"Phone Repair Lakewood New Jersey",
		"Phone Repair New Jersey",
		"iPhone Repair",
		"iPhone Repair Lakewood",
		"iPhone Repair Lakewood New Jersey",
		"iPhone Repair New Jersey",
		"iRepair4u",
		"iRepair4uNJ",
		"iRepair4u Lakewood NJ",
		"iRepair4U Lakewood",
		"smartphone repair",
		"tablet repair",
		"Samsung Repair",
		"Screen Repair",
		"Cracked Screen",
		"Broken Screen",
		"Screen Replacement",
		"Battery Replacement",
		"Data Recovery",
	],
	robots: "index",
	icons: ["/favicon/4u_favicon_32x32.png", "/favicon/4u_favicon_64x64.png"],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<ThemeProvider theme={theme}>
				{/* vercel analytics comp */}
				<Analytics />

				{/* main child comp */}
				<body>{children}</body>
			</ThemeProvider>
		</html>
	)
}
