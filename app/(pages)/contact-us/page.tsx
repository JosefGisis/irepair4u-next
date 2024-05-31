import * as React from "react"
import Link from "next/link"
import { Typography } from "@mui/material"
import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import { colorTheme } from "../../../styles/colorTheme"
import ContactUsBanner from "./components/ContactUsBanner.server"
import ContactInformation from "./components/ContactInformation.server"

export const metadata: Metadata = { title: "iRepair4u - Contact Us" }

export default function ContactUsPage() {
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
			<ContactUsBanner />
			<ContactInformation />
		</section>
	)
}
