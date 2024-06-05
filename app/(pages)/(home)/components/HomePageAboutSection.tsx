import { Box, Container, Typography } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"
import { widths } from "../../../../styles/widths"

export default function HomePageAboutSection() {
	const { redAccentContrast, grayAccent } = colorTheme
	const { sixColumn } = widths

	return (
		<section
			id="about-detailed"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "4rem",
				paddingBottom: "4rem",
				background: `linear-gradient(to bottom right, ${redAccentContrast}, ${grayAccent})`,
			}}>
			<Container maxWidth="lg">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Typography
						textAlign="center"
						variant="h1"
						maxWidth={sixColumn}
						marginBlock="2.5rem">
						ABOUT US
					</Typography>

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "3rem",
						}}>
						{homePageAboutContent.map((item, index) => (
							<Box
								key={index}
								sx={{
									display: "flex",
									flexDirection: {
										xs: "column",
										md: "row",
									},
									gap: "3rem",
									order: 1,
								}}>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
										alignItems: "center",
										maxWidth: sixColumn,
										order: 2,
									}}>
									<div
										style={{
											padding: "1rem",
											width: "100%",
											marginBottom: "1rem",
											background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6) )`,
										}}>
										<Typography
											variant="h4"
											textAlign="center"
											color={redAccentContrast}>
											{item?.title}
										</Typography>
									</div>

									<div style={{ paddingInline: 15 }}>
										<Typography variant="body1">
											{item?.text}
										</Typography>
									</div>
								</div>
								<Box
									sx={{
										order: {
											xs: 3,
											// alternate order of image and text on md screens
											md: index % 2 === 0 ? 3 : 1,
										},
									}}>
									<img
										src={item.url}
										width="460"
										height="307"
									/>
								</Box>
							</Box>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export const homePageAboutContent: {
	title: string
	url: string
	text: string
}[] = [
	{
		title: "OUR STORY",
		url: "images/about-us-3-2-460x307.jpg",
		text: "iRepair4U started fixing phones in 2016 in Lakewood, NJ, and soon gained a reputation for its quality work and friendly service. Since then, our business has grown and our workshop is now located in beautiful Jackson, New Jersey, right off Clearstream, only five minutes out of lakewood.",
	},
	{
		title: "COVERAGE",
		url: "images/coverage1-3-2-460x307.jpg",
		text: "We offer a broad range of services for a wide variety of devices. We repair all popular makes and models, such as Apple, Samsung, LG, Google, OnePlus, Motorola, and more. We would love to work with you, so if you don't see a device or service you need, please give us call!",
	},
	{
		title: "CUSTOMER SERVICE",
		url: "images/trust-us1-3-2-460x307.jpg",
		text: "Since our start, we have set customer service, affordability, and quality work as the cornerstone of our business. We pride ourselves in passing savings on to our customers without compromising on the quality of our work and all while providing a warm and welcoming environment.",
	},
]
