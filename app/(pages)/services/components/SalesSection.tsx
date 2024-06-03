import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function SalesSection(props: {
	__typename: "ServicesBlocksSalesSection"
	sales?:
		| ({
				__typename: "ServicesBlocksSalesSectionSales"
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
				SALES
			</Typography>
			{props.sales?.map((segment, index) => (
				<div
					data-tina-field={tinaField(props, "sales")}
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
