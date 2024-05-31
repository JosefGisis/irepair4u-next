import { Typography } from "@mui/material"
import { termsAndConditions } from "../aboutPageBackupContent"

export default function TermsAndConditions() {
	return (
		<section
			id="terms-and-conditions"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "#D2D2D2",
				padding: "2rem",
				marginBottom: "3rem",
			}}>
			<div>
				<Typography
					variant="h4"
					style={{ marginBlock: "0.5rem" }}
					textAlign="center">
					TERMS AND CONDITIONS
				</Typography>
			</div>

			<div>
				{termsAndConditions.map((section, index) => (
					<div key={index}>
						<Typography
							variant="h5"
							style={{ marginBottom: "1rem", marginTop: "2rem" }}>
							{section.title}
						</Typography>
						{section.paragraphs.map((paragraph, index) => (
							<Typography
								key={index}
								style={{ marginBottom: "0.8rem" }}
								variant="body2">
								- {paragraph}
							</Typography>
						))}
					</div>
				))}
			</div>
		</section>
	)
}
