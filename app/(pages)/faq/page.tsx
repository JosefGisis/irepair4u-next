import * as React from "react"
import { Typography } from "@mui/material"

import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import client from "../../../tina/__generated__/client"
import FAQComponents from "./components/Index"

export const metadata: Metadata = {
	title: "iRepair4u - FAQ",
}

export default async function FAQPage() {
	const results = await client.queries.faq({ relativePath: "New_FAQ.md" })
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

			<FAQComponents {...results} />
		</section>
	)
}
