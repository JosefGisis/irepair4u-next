import * as React from "react"
import { Container, Typography, Box } from "@mui/material"
import JotformComp from "../../components/JotformComp"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "iRepair4u - Contact Us" }

export default function ContactUsPage() {
	return (
		<Box
			component="section"
			id="about-page"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Container maxWidth="lg">
				{/* detailed about us information */}
				<Box maxWidth="38.75rem">
					<Typography textAlign="center" variant="h4">
						WE'D LOVE TO WORK WITH YOU!
					</Typography>
					<Typography textAlign="center" variant="h6">
						Let's Connect and Get Your Device Back on Track.
					</Typography>
				</Box>

				<Box
					maxWidth="43.75rem"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					{contactUsPageContent.map((section, index) => (
						<Box key={index} maxWidth="43.75rem">
							<Typography textAlign="center" variant="h6">
								{section.title}
								<a
									href={`${section.linkType === "email" ? "mailto:" : section.linkType === "tel" ? "tel:+" : ""}${section.link}`}>
									{section.link}
								</a>
							</Typography>
							<Typography variant="body2">
								{section.paragraph}
							</Typography>
						</Box>
					))}
				</Box>
				<JotformComp />
			</Container>
		</Box>
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
		title: "Give us a call at ",
		linkType: "tel",
		link: "+7323303038",
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
