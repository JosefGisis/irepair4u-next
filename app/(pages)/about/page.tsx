import * as React from "react"
import { Typography } from "@mui/material"
import { Metadata } from "next"
import { widths } from "../../../styles/widths"

import AboutComponents from "./components/Index"
import client from "../../../tina/__generated__/client"

export const metadata: Metadata = { title: "iRepair4u - About Us" }

export default async function AboutPage() {
	const result = await client.queries.about({ relativePath: "About.md" })
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
			}}>
			<div>
				<Typography
					textAlign="center"
					variant="h1"
					style={{ marginBottom: "2rem", marginTop: "3rem" }}>
					ABOUT US
				</Typography>
			</div>

			<AboutComponents {...result} />
		</section>
	)
}
