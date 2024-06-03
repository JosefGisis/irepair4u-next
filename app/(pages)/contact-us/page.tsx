import * as React from "react"
import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import ContactUsComponents from "./components/Index"
import client from "../../../tina/__generated__/client"

export const metadata: Metadata = { title: "iRepair4u - Contact Us" }

export default async function ContactUsPage() {
	const results = await client.queries.contactUs({
		relativePath: "Contact_Us.md",
	})
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
			<ContactUsComponents {...results} />
		</section>
	)
}
