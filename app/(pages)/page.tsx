import React from "react"
import Link from "next/link"
import { Container, Box, Typography, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ServicesCard from "../components/ServicesContainer"
import { widths } from "../../styles/widths"
import { colorTheme } from "../../styles/colorTheme"
import { WelcomeHeroBlockBackup } from "./homePageBackupContent"

import type { Metadata } from "next"
import type { PageBlocksWelcomeHero } from "../../tina/__generated__/types"
import client from "../../tina/__generated__/client"

export const metadata: Metadata = {
	title: "iRepair4u - home",
}

export default async function page() {
	const result = await client.queries.page({ relativePath: "Home.md" })
	
	const heroBlock = result?.data?.page?.blocks?.find(
		(block) => block?.__typename === "PageBlocksWelcomeHero"
	) as PageBlocksWelcomeHero | undefined

	const { sixColumn, eightColumn, nineColumn } = widths
	const { redAccent, redAccentContrast, grayAccent } = colorTheme

	return (
		<div
			id="home-page-content"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Container maxWidth="lg">
				{/* this is the hero section for the home page */}
				<section
					id="about-simple"
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "3rem",
						marginBottom: "4rem",
					}}>
					<Typography
						textAlign="center"
						variant="h1"
						maxWidth={eightColumn}
						marginBottom="2rem">
						{heroBlock?.title || WelcomeHeroBlockBackup.title}
					</Typography>

					<div style={{ maxWidth: nineColumn, marginBottom: "2rem" }}>
						<Typography variant="subtitle2" textAlign="center">
							{heroBlock?.subtitle || WelcomeHeroBlockBackup.subtitle}
						</Typography>
					</div>

					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "15px",
							marginBottom: "4rem",
						}}>
						<Link href="/contact-us">
							<Button
								href="/contact-us"
								variant="contained"
								sx={{ backgroundColor: redAccent }}>
								CONTACT US
							</Button>
						</Link>

						<Link href="/about">
							<Button
								href="/about"
								variant="outlined"
								sx={{ color: redAccent }}>
								ABOUT US
							</Button>
						</Link>
					</div>

					<div style={{ width: "100%" }}>
						<img src={WelcomeHeroBlockBackup.url} style={{ width: "100%" }} />
					</div>
				</section>
			</Container>

			{/* this is a simple about section for the home page */}
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
							{homePageAboutContent.map((content, index) => (
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
												{content.title}
											</Typography>
										</div>

										<div style={{ paddingInline: 15 }}>
											{content.paragraphs.map(
												(paragraph, subIndex) => (
													<Typography
														key={subIndex}
														variant="body1">
														{paragraph}
													</Typography>
												)
											)}
										</div>
									</div>
									<Box
										sx={{
											order: {
												xs: 3,
												// alternate order
												md: index % 2 === 0 ? 3 : 1,
											},
										}}>
										<img
											src={content.url}
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
					We offer many more services. For a full listing, check out
					our{" "}
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

			{/* this is the warranty banner */}
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
		</div>
	)
}

const homePageAboutContent: {
	title: string
	url: string
	paragraphs: string[]
}[] = [
	{
		title: "OUR STORY",
		url: "images/about-us-3-2-460x307.jpg",
		paragraphs: [
			"iRepair4U started fixing phones in 2016 in Lakewood, NJ, and soon gained a reputation for its quality work and friendly service. Since then, our business has grown and our workshop is now located in beautiful Jackson, New Jersey, right off Clearstream, only five minutes out of lakewood.",
		],
	},
	{
		title: "COVERAGE",
		url: "images/coverage1-3-2-460x307.jpg",
		paragraphs: [
			"We offer a broad range of services for a wide variety of devices. We repair all popular makes and models, such as Apple, Samsung, LG, Google, OnePlus, Motorola, and more. We would love to work with you, so if you don't see a device or service you need, please give us call!",
		],
	},
	{
		title: "CUSTOMER SERVICE",
		url: "images/trust-us1-3-2-460x307.jpg",
		paragraphs: [
			"Since our start, we have set customer service, affordability, and quality work as the cornerstone of our business. We pride ourselves in passing savings on to our customers without compromising on the quality of our work and all while providing a warm and welcoming environment.",
		],
	},
]

const homePageServicesContent: {
	title: string
	url: string
	href: string
	paragraphs: string[]
}[] = [
	{
		title: "SCREEN REPLACEMENT",
		url: "images/age-barros-fKAjOxgZNPg-unsplash.jpg",
		href: "/services",
		paragraphs: [
			"Phone screen broken or cracked? No worries! Screen repairs are our specialty. We will have your phone looking and working line new in no time.",
		],
	},
	{
		title: "WATER DAMAGE",
		url: "images/iphone-1067991_640.jpg",
		href: "/services",
		paragraphs: [
			"Accidents happen. Bring us your water damaged phone so we can assist you. In the meantime, click <a class='text-white' href='/faq.html'>here</a> to see what you can do to increase your phone's chance of surviving.",
		],
	},
	{
		title: "BATTERY REPLACEMENT",
		url: "images/tyler-lastovich-rAtzDB6hWrU-unsplash.jpg",
		href: "/services",
		paragraphs: [
			"If your phone won't charge or your battery is draining too quickly, we offer fast and affordable battery replacements and charging port repairs.",
		],
	},
	{
		title: "DATA RECOVERY",
		url: "images/benjamin-lehman-GNyjCePVRs8-unsplash.jpg",
		href: "/services",
		paragraphs: [
			"Need to save precious data? We can help you recover and preserve all your invaluable photos, videos, messages, and other media from your device.",
		],
	},
	{
		title: "ACCESSORIES",
		url: "images/lucas-hoang-0_S1K3u6Cmc-unsplash.jpg",
		href: "/services",
		paragraphs: [
			"We offer accessories for your mobile devices, such as screen protectors, chargers, car mounts, and more. We also have cases for most popular smartphone makes and models.",
		],
	},
	{
		title: "SPEAKER REPAIR",
		url: "images/apple-1284223_640.jpg",
		href: "/services",
		paragraphs: [
			"Having a hard time hearing others during your calls? Speakers can go weak over time. We can improve the quality of your microphone and speakers.",
		],
	},
]

const warrantyBannerContent = {
	title: "Free 90-Day Warranty",
	paragraphs: [
		"All our phone repair services are backed by our free 90-day warranty. We guarantee the quality of our work. If you encounter issue connected to the repair we conducted, we've got you covered. See for more information on our warranty.",
	],
}
