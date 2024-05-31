import * as React from "react"
import { Typography } from "@mui/material"

import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import FAQSection from "./components/FAQSection.server"

export const metadata: Metadata = {
	title: "iRepair4u - FAQ",
}

export default function FAQPage() {
	const { tenColumn } = widths
	return (
		<section
			id="about-page"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				maxWidth: tenColumn,
				marginInline: "auto",
				paddingInline: "20px",
			}}>
			<Typography
				textAlign="center"
				variant="h1"
				style={{ marginBottom: "1rem", marginTop: "3rem" }}>
				FAQ
			</Typography>

			<Typography variant="h5" marginBottom="2rem">
				Here are some questions are customers frequently ask us.
			</Typography>

			<FAQSection />
		</section>
	)
}
