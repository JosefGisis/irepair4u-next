import { Typography, Link } from "@mui/material"
import { contactUsPageContent } from "../contactUsPageBackupContent"
import { colorTheme } from "../../../../styles/colorTheme"

export default function ContactInformation() {
    const { redAccent } = colorTheme
	return (
		<>
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
		</>
	)
}
