import Link from "next/link"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Container, Typography } from "@mui/material"
import ServicesCard from "./ServicesCard"
import { homePageServicesContent } from "../homePageBackupContent"
import { widths } from "../../../../styles/widths"
import { colorTheme } from "../../../../styles/colorTheme"

export default function HomePageServicesSection(
	props: ({
		__typename: "HomeBlocksHomePageServices"
		title?: string | null | undefined
		text?: string | null | undefined
		pageLink?: string | null | undefined
		id?: string | null | undefined
		image?: string | null | undefined
	} | null)[]
) {
	const { redAccent } = colorTheme
	const { eightColumn, nineColumn } = widths

	return (
		<Container>
			{/* this is a simple services section for the home page */}
			<section
				id="services"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "4rem",
				}}>
				<Typography
					maxWidth={eightColumn}
					marginBottom="2.5rem"
					textAlign="center"
					variant="h1">
					SERVICES
				</Typography>

				<Grid2
					container
					rowSpacing={5}
					columnSpacing={3}
					justifyItems="center">
					{homePageServicesContent.map((content, index) => (
						<Grid2 key={index} xs={12} sm={6} md={4}>
							<ServicesCard
								text={content.paragraphs[0]}
								url={content.url}
								href={content.href}
								header={content.title}
							/>
						</Grid2>
					))}
				</Grid2>
			</section>

			<Typography
				variant="subtitle1"
				textAlign="center"
				maxWidth={nineColumn}
				marginBottom="4rem"
				marginInline="auto">
				We offer many more services. For a full listing, check out our{" "}
				<span
					style={{
						color: redAccent,
						textDecoration: "underline",
					}}>
					<Link href="/services">services</Link>
				</span>{" "}
				page
			</Typography>
		</Container>
	)
}
