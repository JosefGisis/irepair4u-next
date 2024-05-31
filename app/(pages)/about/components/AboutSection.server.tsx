import { Typography } from "@mui/material"
import { aboutPageContent } from "../aboutPageBackupContent"

export default function AboutSection() {
	return (
		<div style={{ paddingInline: 20 }}>
			{aboutPageContent.map((section, index) => (
				<div key={index}>
					<Typography variant="h5" style={{ marginBlock: 20 }}>
						{section.title}
					</Typography>
					{section.paragraphs.map((paragraph, index) => (
						<Typography
							key={index}
							style={{ marginBottom: 15 }}
							variant="body2">
							{paragraph}
						</Typography>
					))}
				</div>
			))}
		</div>
	)
}
