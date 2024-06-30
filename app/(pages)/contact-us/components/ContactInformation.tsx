import { Typography, Link } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"
import { contactUsPageContent } from "../../../content"

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
