import { Typography, Link, Button, Container } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"
import { widths } from "../../../../styles/widths"

export default function WelcomeHero() {
	const { redAccent } = colorTheme
	const { eightColumn, nineColumn } = widths
	return (
		<Container maxWidth="lg">
			<section
				id={welcomeHeroContent.id || ""}
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
					{welcomeHeroContent.title}
				</Typography>

				<div style={{ maxWidth: nineColumn, marginBottom: "2rem" }}>
					<Typography variant="subtitle2" textAlign="center">
						{welcomeHeroContent.subtitle}
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
							variant="contained"
							sx={{ backgroundColor: redAccent }}>
							CONTACT US
						</Button>
					</Link>

					<Link href="/about">
						<Button variant="outlined" sx={{ color: redAccent }}>
							ABOUT US
						</Button>
					</Link>
				</div>

				<div style={{ width: "100%" }}>
					<img
						src={welcomeHeroContent.url}
						style={{ width: "100%" }}
					/>
				</div>
			</section>
		</Container>
	)
}

export const welcomeHeroContent: {
	id?: string
	title: string
	url: string
	subtitle: string
} = {
	id: "welcome-hero",
	title: "IPHONE, IPAD, AND MORE",
	url: "images/imac-940x474.png",
	subtitle:
		"iRepair4U has been serving Lakewood, Jackson and neighboring communities for over 9 years. We provide fast, professional, and courteous services at affordable prices. Give us a call so we may assist you!",
}
