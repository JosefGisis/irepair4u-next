import * as React from "react"
import { Typography } from "@mui/material"
import { Metadata } from "next"
import { widths } from "../../../styles/widths"
import AboutSection from "./components/AboutSection"
import SeeYouSoon from "./components/SeeYouSoon"
import TermsAndConditions from "./components/TermsAndConditions"

export const metadata: Metadata = { title: "iRepair4u - About Us" }

export default function AboutPage() {
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

			<AboutSection />
			<SeeYouSoon />
			<TermsAndConditions />
		</section>
	)
}
