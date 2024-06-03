import { Box, Typography, Container, Divider } from "@mui/material"

import { colorTheme } from "../../../styles/colorTheme"
import client from "../../../tina/__generated__/client"
import FooterComponents from "./components/Index"

export default function Footer() {
	const { redAccent, redAccentContrast } = colorTheme
	return (
		<div
			style={{
				backgroundColor: redAccent,
				color: redAccentContrast,
			}}>
			<Container maxWidth="lg">
				<div
					style={{
						marginTop: "18px",
					}}>
					{client.queries
						.home({ relativePath: "New_Home.md" })
						.then((results) => {
							return <FooterComponents {...results} />
						})
						.catch((err) => console.log(err))}
				</div>

				<Typography
					variant="body1"
					sx={{ my: "60px", textAlign: "center" }}>
					©️ 2023 iRepair4ULLC - Lakewood, NJ | Designed by Josef
					Gisis
				</Typography>
			</Container>
		</div>
	)
}

const hours: { day: string; hours: string }[] = [
	{ day: "Sun - Thu", hours: "11:00am - 5:00pm" },
	{ day: "Friday", hours: "11:00am - 2:00pm" },
	{ day: "Saturday", hours: "closed" },
]

export type LinksType = {
	title: string
	links: { name: string; link: string }[]
}[]
const links: LinksType = [
	{
		title: "Information Links",
		links: [
			{ name: "About", link: "/about" },
			{
				name: "Terms and Conditions",
				link: "/about#terms-and-conditions",
			},
			{ name: "FAQ", link: "/faq" },
			{ name: "Services", link: "/services" },
			{ name: "Accessories", link: "/services#accessories-sales-tag" },
			{ name: "Phone Sales", link: "/services#phone-sales-tag" },
			{ name: "Site Documentation", link: "/README" },
		],
	},
	{
		title: "Services Links",
		links: [
			{ name: "Screen Repair", link: "/services#repair-services-tag" },
			{
				name: "Battery Replacement",
				link: "/services#repair-services-tag",
			},
			{ name: "Water Damage", link: "/services#repair-services-tag" },
			{ name: "Button Repair", link: "/services#repair-services-tag" },
			{ name: "Camera Repair", link: "/services#repair-services-tag" },
			{ name: "Speaker Repair", link: "/services#repair-services-tag" },
			{ name: "Data Recovery", link: "/services#repair-services-tag" },
			{ name: "Board Repair", link: "/services#repair-services-tag" },
		],
	},
	{
		title: "Coverage Links",
		links: [
			{ name: "iPhone", link: "/services#iphone-tag" },
			{ name: "Samsung", link: "/services#samsung-tag" },
			{ name: "Smartphone", link: "/services#smartphone-tag" },
			{ name: "Flip Phone", link: "/services#flipphone-tag" },
			{ name: "Tablet", link: "/services#tablet-tag" },
			{ name: "Computer", link: "/services#computer-tag" },
		],
	},
]
