import { Container, Box, Typography, Button, Divider } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ServicesCard from "../components/ServicesContainer"
import { colorTheme } from "../../styles/colorTheme"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "iRepair4u - home",
}

export default function page() {
	return (
		<Box
			component="div"
			id="home-page-content"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Container maxWidth="lg">
				{/* this is the hero section for the home page */}
				<Box
					component="section"
					id="about-simple"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "3rem",
						marginBottom: "4rem",
					}}>
					<Box maxWidth="38.75rem" marginBottom="2rem">
						<Typography textAlign="center" variant="h1">
							{heroContent.title}
						</Typography>
					</Box>

					<Box maxWidth="43.75rem" marginBottom="2rem">
						{heroContent.paragraphs.map((paragraph, index) => (
							<Typography
								key={index}
								variant="subtitle2"
								textAlign="center">
								{paragraph}
							</Typography>
						))}
					</Box>

					<Box
						sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}
						marginBottom="4rem">
						<Button
							href="/contact-us"
							variant="contained"
							sx={{ backgroundColor: colorTheme.redAccent }}>
							CONTACT US
						</Button>

						<Button
							href="/about"
							variant="outlined"
							sx={{ color: colorTheme.redAccent }}>
							ABOUT US
						</Button>
					</Box>

					<img src={heroContent.url} width="940" height="474" />
				</Box>
			</Container>

			{/* this is a simple about section for the home page */}
			<Box
				component="section"
				id="about-detailed"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "4rem",
					background:
						"linear-gradient(to bottom right, white, rgb(210, 210, 210)",
				}}>
				<Container maxWidth="lg">
					<Box maxWidth="28.75rem" marginBlock="2.5rem">
						<Typography textAlign="center" variant="h1">
							ABOUT US
						</Typography>
					</Box>

					{homePageAboutContent.map((content, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "15px",
							}}>
							<Box>
								<Typography variant="h4">
									{content.title}
								</Typography>

								{content.paragraphs.map((paragraph, index) => (
									<Typography key={index} variant="body1">
										{paragraph}
									</Typography>
								))}
							</Box>
							<img src={content.url} width="460" height="307" />
						</Box>
					))}
				</Container>
			</Box>

			<Container>
				{/* this is a simple services section for the home page */}
				<Box
					component="section"
					id="services"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginBottom: "4rem",
					}}>
					<Box maxWidth="38.75rem" marginBottom="2.5rem">
						<Typography textAlign="center" variant="h1">
							SERVICES
						</Typography>
					</Box>
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
				</Box>

				<Box
					maxWidth="43.75rem"
					marginBottom="4rem"
					marginInline="auto">
					<Typography variant="subtitle1" textAlign="center">
						We offer many more services. For a full listing, check
						out our{" "}
						<span
							style={{
								color: "rgb(255, 30, 70)",
								textDecoration: "underline",
							}}>
							<a href="/services">services</a>
						</span>{" "}
						page
					</Typography>
				</Box>
			</Container>

			{/* this is the warranty banner */}
			<Box
				id="warranty-banner"
				sx={{
					width: "100%",
					backgroundColor: "#D2D2D2",
					textColor: "#000000",
					borderBottom: "5px solid rgb(150, 150, 150)",
				}}>
				<Container maxWidth="lg">
					<Box
						sx={{
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
					</Box>
				</Container>
			</Box>
		</Box>
	)
}

const heroContent = {
	title: "IPHONE, IPAD, AND MORE",
	url: "images/imac-940x474.png",
	paragraphs: [
		"iRepair4U has been serving Lakewood, Jackson and neighboring communities for over 9 years. We provide fast, professional, and courteous services at affordable prices. Give us a call so we may assist you!",
	],
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
