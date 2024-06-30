import { Typography } from "@mui/material"
import { faqTextContent } from "../../../content"

export default function FAQSection() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "3rem",
			}}>
			{faqTextContent.map((item, index) => (
				<div key={index} id={item.id || ""} style={{ width: "100%" }}>
					<Typography
						variant="subtitle1"
						marginBottom="1rem"
						marginTop="1.5rem">
						Q. {item.q}
					</Typography>
					<Typography marginBottom="1rem" variant="body2">
						{item.a}
					</Typography>
				</div>
			))}
		</div>
	)
}
