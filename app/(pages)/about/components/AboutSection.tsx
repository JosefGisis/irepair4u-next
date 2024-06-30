import { Typography } from "@mui/material"
import { aboutPageContent } from "../../../content"

export default function AboutSection() {
	return (
		<div style={{ paddingInline: 20 }}>
			{aboutPageContent.map((card, index) => (
				<div id={card.id || ""} key={index}>
					<Typography variant="h5" style={{ marginBlock: 20 }}>
						{card?.title}
					</Typography>
					{card?.paragraphs?.map((paragraph, index) => (
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
