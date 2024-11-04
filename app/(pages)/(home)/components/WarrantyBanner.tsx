import { Container, Typography } from "@mui/material"

export default function WarrantyBanner() {
	return (
		<div
			id={warrantyBannerContent.id || ""}
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
						marginBottom="2.5rem">
						{warrantyBannerContent.title}
					</Typography>
					{warrantyBannerContent.paragraphs?.map(
						(paragraph, index) => (
							<Typography
								key={index}
								variant="body1"
								textAlign="center">
								{paragraph}
							</Typography>
						)
					)}
				</div>
			</Container>
		</div>
	)
}

export const warrantyBannerContent: {
	id?: string
	title: string
	paragraphs: string[]
} = {
	id: "warranty-banner",
	title: "Free 90-Day Warranty",
	paragraphs: [
		"All our phone repair services are backed by our free 90-day warranty. We guarantee the quality of our work. If you encounter issue connected to the repair we conducted, we've got you covered. See our terms-and-conditions for more information on our warranty.",
	],
}
