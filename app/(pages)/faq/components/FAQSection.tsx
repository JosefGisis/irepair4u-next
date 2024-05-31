import { Typography } from "@mui/material"
import { faqTextContent } from "../faqPageBackupContent"

export default function FAQSection() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "3rem",
			}}>
			{faqTextContent.map((section, index) => (
				<div key={index} style={{ width: "100%" }}>
					<Typography
						variant="subtitle1"
						marginBottom="1rem"
						marginTop="1.5rem">
						Q. {section.q}
					</Typography>
					<Typography marginBottom="1rem" variant="body2">
						{section.a}
					</Typography>
				</div>
			))}
		</div>
	)
}
