import Link from "next/link"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { Container, Typography } from "@mui/material"
import ServicesCard from "./ServicesCard"
import { widths } from "../../../../styles/widths"
import { colorTheme } from "../../../../styles/colorTheme"

export default function HomePageServicesSection() {
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
					{homePageServicesContent.map((item, index) => (
						<Grid2 key={index} xs={12} sm={6} md={4}>
							<ServicesCard
								text={item.text}
								url={item.url}
								href={item.href}
								header={item.title}
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

export const homePageServicesContent: {
	title: string
	url: string
	href: string
	text: string
}[] = [
	{
		title: "SCREEN REPLACEMENT",
		url: "images/age-barros-fKAjOxgZNPg-unsplash.jpg",
		href: "/services",
		text: "Phone screen broken or cracked? No worries! Screen repairs are our specialty. We will have your phone looking and working line new in no time.",
	},
	{
		title: "WATER DAMAGE",
		url: "images/iphone-1067991_640.jpg",
		href: "/services",
		text: "Accidents happen. Bring us your water damaged phone so we can assist you. In the meantime, click <a class='text-white' href='/faq.html'>here</a> to see what you can do to increase your phone's chance of surviving.",
	},
	{
		title: "BATTERY REPLACEMENT",
		url: "images/tyler-lastovich-rAtzDB6hWrU-unsplash.jpg",
		href: "/services",
		text: "If your phone won't charge or your battery is draining too quickly, we offer fast and affordable battery replacements and charging port repairs.",
	},
	{
		title: "DATA RECOVERY",
		url: "images/benjamin-lehman-GNyjCePVRs8-unsplash.jpg",
		href: "/services",
		text: "Need to save precious data? We can help you recover and preserve all your invaluable photos, videos, messages, and other media from your device.",
	},
	{
		title: "ACCESSORIES",
		url: "images/lucas-hoang-0_S1K3u6Cmc-unsplash.jpg",
		href: "/services",
		text: "We offer accessories for your mobile devices, such as screen protectors, chargers, car mounts, and more. We also have cases for most popular smartphone makes and models.",
	},
	{
		title: "SPEAKER REPAIR",
		url: "images/apple-1284223_640.jpg",
		href: "/services",
		text: "Having a hard time hearing others during your calls? Speakers can go weak over time. We can improve the quality of your microphone and speakers.",
	},
]
