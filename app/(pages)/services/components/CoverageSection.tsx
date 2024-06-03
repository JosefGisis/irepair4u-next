import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function CoverageSection(props: {
	__typename: "ServicesBlocksCoverageSection"
	coverage?:
		| ({
				__typename: "ServicesBlocksCoverageSectionCoverage"
				title?: string | null | undefined
				id?: string | null | undefined
				paragraphs?: (string | null)[] | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<div>
			<Typography
				variant="h5"
				textAlign="start"
				style={{ marginTop: "1rem", marginBottom: "1rem" }}>
				COVERAGE
			</Typography>
			{props.coverage?.map((segment, index) => (
				<div
					data-tina-field={tinaField(props)}
					key={index}
					id={segment?.id || ""}>
					<Typography
						variant="subtitle1"
						style={{ marginBottom: "0.6rem" }}>
						● {segment?.title}
					</Typography>
					{segment?.paragraphs?.map((paragraph, index) => (
						<Typography
							key={index}
							variant="body1"
							style={{ marginBottom: "0.6rem" }}>
							{paragraph}
						</Typography>
					))}
				</div>
			))}
		</div>
	)
}
