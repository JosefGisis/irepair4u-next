import * as React from "react"
import { Typography } from "@mui/material"

import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import ServicesSection from "./components/ServicesSection.server"

export const metadata: Metadata = { title: "iRepair4u - FAQ" }

export default function ServicesPage() {
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
				style={{ marginBottom: "2rem", marginTop: "3rem" }}>
				SERVICES
			</Typography>

			<ServicesSection />

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBlock: "4rem",
				}}>
				<Typography textAlign="center" variant="h4" marginBottom="3rem">
					Don't see what you are looking for? No worries! Just give us
					a call.
				</Typography>

				<img
					style={{ width: "100%" }}
					src="images/pexels-gabriel-freytez-5184x3456-corrected-reduced.jpg"
					alt="Image of multiple apple devices stacked on top of each other"
				/>
			</div>
		</section>
	)
}
