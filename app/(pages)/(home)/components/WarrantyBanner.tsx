import { Container, Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function WarrantyBanner(props: {
	__typename: "HomeBlocksWarrantyBanner"
	title?: string | null | undefined
	paragraphs?: (string | null)[] | null | undefined
}) {
	return (
		<div
			id="warranty-banner"
			style={{
				width: "100%",
				backgroundColor: "#D2D2D2",
				color: "#000000",
				borderBottom: "5px solid rgb(150, 150, 150)",
			}}>
			<Container maxWidth="lg">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						paddingBlock: "2.5rem",
					}}>
					<Typography
						variant="h3"
						textAlign="center"
						marginBottom="2.5rem"
						data-tina-field={tinaField(props, "title")}>
						{props.title}
					</Typography>
					{props.paragraphs?.map((paragraph, index) => (
						<Typography
							data-tina-field={tinaField(props, "paragraphs")}
							key={index}
							variant="body1"
							textAlign="center">
							{paragraph}
						</Typography>
					))}
				</div>
			</Container>
		</div>
	)
}
