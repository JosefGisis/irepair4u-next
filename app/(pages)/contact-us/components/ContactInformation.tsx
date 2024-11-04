import { Typography, Link } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"

export default function ContactInformation() {
	const { redAccent } = colorTheme
	return (
		<>
			{contactUsPageContent.map((card, index) => (
				<div key={index} id={card.id || ""} style={{ width: "100%" }}>
					<Typography
						variant="h6"
						marginBottom="1rem"
						marginTop="1.5rem">
						{card?.title}{" "}
						<span
							style={{
								color: redAccent,
								textDecoration: "underline",
							}}>
							<Link
								href={`${card?.linkType === "email" ? "mailto:" : card?.linkType === "tel" ? "tel:+" : ""}${card?.link}`}>
								{card.link}
							</Link>
						</span>
					</Typography>
					<Typography variant="body1" marginBottom="1rem">
						{card.text}
					</Typography>
				</div>
			))}
		</>
	)
}

export const contactUsPageContent: {
	id?: string
	title: string
	linkType: "tel" | "email" | "social" | "other"
	link: string
	text: string
}[] = [
	{
		title: "Give us a call at",
		linkType: "tel",
		link: "7323303038",
		text: "If you can't get through to us, please leave a voicemail or message with your name, phone number, and device specifications.",
	},
	{
		title: "or contact us via email at",
		linkType: "email",
		link: "irepairr4u@gmail.com",
		text: "When emailing us, please provide the make and model of your device, as well as the issue or repair of your concern. You can find information about your device in settings/about. If you are still unsure, or cannot access your device’s settings, no problem, just send us whatever information you do have about your device. Also, please put your name as a comment, so we can contact you sooner and more effectively communicate.",
	},
]
