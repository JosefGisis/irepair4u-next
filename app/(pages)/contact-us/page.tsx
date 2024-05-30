import * as React from "react"
import Link from "next/link"
import { Typography } from "@mui/material"
import type { Metadata } from "next"
import { widths } from "../../../styles/widths"
import { colorTheme } from "../../../styles/colorTheme"

export const metadata: Metadata = { title: "iRepair4u - Contact Us" }

export default function ContactUsPage() {
	const { redAccent } = colorTheme
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
			{/* detailed about us information */}

			<Typography
				textAlign="center"
				variant="h3"
				marginTop="3rem"
				marginBottom="1.8rem">
				WE'D LOVE TO WORK WITH YOU!
			</Typography>
			<Typography textAlign="center" variant="h6" marginBottom="2rem">
				Let's Connect and Get Your Device Back on Track.
			</Typography>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				{contactUsPageContent.map((section, index) => (
					<div key={index} style={{ width: "100%" }}>
						<Typography
							variant="h6"
							marginBottom="1rem"
							marginTop="1.5rem">
							{section.title}{" "}
							<span
								style={{
									color: redAccent,
									textDecoration: "underline",
								}}>
								<Link
									href={`${section.linkType === "email" ? "mailto:" : section.linkType === "tel" ? "tel:+" : ""}${section.link}`}>
									{section.link}
								</Link>
							</span>
						</Typography>
						<Typography variant="body1" marginBottom="1rem">
							{section.paragraph}
						</Typography>
					</div>
				))}
			</div>
			{/* not working for now */}
			{/* <div
				style={{
					minHeight: "1042px",
					width: "100%",
					marginBottom: "3rem",
					marginTop: "3rem",
				}}>
				<JotformComp />
			</div> */}
		</section>
	)
}

export type ContactUsPageContentType = {
	title: string
	linkType: "tel" | "email" | "social" | "other"
	link: string
	paragraph: string
}[]
const contactUsPageContent: ContactUsPageContentType = [
	{
		title: "Give us a call at",
		linkType: "tel",
		link: "7323303038",
		paragraph:
			"If you can't get through to us, please leave a voicemail or message with your name, phone number, and device specifications.",
	},
	{
		title: "or contact us via email at",
		linkType: "email",
		link: "irepairr4u@gmail.com",
		paragraph:
			"When emailing us, please provide the make and model of your device, as well as the issue or repair of your concern. You can find information about your device in settings/about. If you are still unsure, or cannot access your device’s settings, no problem, just send us whatever information you do have about your device. Also, please put your name as a comment, so we can contact you sooner and more effectively communicate.",
	},
]
