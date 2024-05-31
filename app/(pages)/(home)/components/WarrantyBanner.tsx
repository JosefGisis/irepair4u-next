import { Container, Typography } from "@mui/material"
import { warrantyBannerContent } from "../homePageBackupContent"

export default function WarrantyBanner() {
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
						marginBottom="2.5rem">
						{warrantyBannerContent.title}
					</Typography>
					{warrantyBannerContent.paragraphs.map(
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
