import * as React from "react"
import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import ContactUsBanner from "./components/ContactUsBanner"
import ContactInformation from "./components/ContactInformation"
import SurveyForm from "./components/SurveyForm"

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
			<div
				style={{
					marginTop: "2rem",
					width: "100%",
				}}>
				<SurveyForm />
			</div>
		</section>
	)
}
