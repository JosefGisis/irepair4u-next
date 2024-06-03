import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function AboutSection(props: {
	__typename: "AboutBlocksAboutSegment"
	cards?:
		| ({
				__typename: "AboutBlocksAboutSegmentCards"
				title?: string | null | undefined
				id?: string | null | undefined
				paragraphs?: (string | null)[] | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<div
			data-tina-field={tinaField(props)}
			style={{ paddingInline: 20 }}>
			{props.cards?.map((card, index) => (
				<div key={index}>
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
