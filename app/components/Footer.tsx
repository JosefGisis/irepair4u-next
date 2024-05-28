"use client"

import { Theme, useTheme } from "@emotion/react"
import { Box, Typography, Container } from "@mui/material"
import Link from "next/link"

export default function Footer() {
	const theme = useTheme()
	const primaryColor = theme.palette.primary

	return (
		<Box
			sx={{
				backgroundColor: primaryColor.main,
				color: primaryColor.contrastText,
			}}
			>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						gap: "40px",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						mt: "18px",
					}}>
					<Box>
						<ul id="business-links">
							<li className="footer-header">
								<a href="/">
									<Box sx={{ display: "flex", gap: "8px" }}>
										<img
											src="images/irepair4u_white_transparent_100x860.svg"
											alt="iRepair4U banner"
											width="172px"
											height="20px"
										/>
										<img
											src="images/irepair4u_icon_white_transparent_300x300.svg"
											alt="iRepair4U logo"
											width="40px"
											height="40px"
										/>
									</Box>
								</a>
							</li>

							<li id="phone" className="footer-item">
								(732)-330-3038
							</li>
							<li id="email" className="footer-item">
								<a href="mailto:iRepairr4u@gmail.com">
									iRepairr4U@gmail.com
								</a>
							</li>
							<li id="address" className="footer-item">
								750 Green Valley rd., Jackson, NJ 08527
							</li>
							<li>
								<table id="hours">
									<thead id="hours-heading">
										<Typography variant="h6">
											hours
										</Typography>
									</thead>

									<tbody>
										<td>Sun - Thu</td>
										<td>11:00am - 5:00pm</td>
									</tbody>

									<tbody>
										<td>Friday</td>
										<td> 11:00am - 2:00pm</td>
									</tbody>

									<tbody>
										<td>Saturday</td>
										<td>closed</td>
									</tbody>
								</table>
							</li>
						</ul>
					</Box>

					<Box>
						<Typography variant="h6" className="footer-header">
							INFORMATION
						</Typography>
						<ul>
							{informationLinks.map((link) => (
								<li key={link.name} className="footer-link">
									<Link href={link.link}>{link.name}</Link>
								</li>
							))}
						</ul>
					</Box>
					<Box>
						<Typography variant="h6" className={"footer-header"}>
							SERVICES
						</Typography>
						<ul>
							{servicesLinks.map((link) => (
								<li key={link.name} className="footer-link">
									<Link href={link.link}>{link.name}</Link>
								</li>
							))}
						</ul>
					</Box>
					<Box>
						<Typography variant="h6" className="footer-header">
							COVERAGE
						</Typography>
						<ul>
							{coverageLinks.map((link) => (
								<li key={link.name} className="footer-link">
									<Link href={link.link}>{link.name}</Link>
								</li>
							))}
						</ul>
					</Box>
				</Box>
				<Typography
					variant="body1"
					sx={{ my: "40px", textAlign: "center" }}>
					©️ 2023 iRepair4U LLC | designed by Josef Gisis
				</Typography>
			</Container>
		</Box>
	)
}

export type LinkObject = {
	name: string
	link: string
}
const informationLinks: LinkObject[] = [
	{ name: "about", link: "/about" },
	{ name: "terms and conditions", link: "/about#terms-and-conditions" },
	{ name: "faq", link: "/faq" },
	{ name: "Services", link: "/services" },
	{ name: "accessories", link: "/services#accessories-sales-tag" },
	{ name: "phone sales", link: "/services#phone-sales-tag" },
	{ name: "site documentation", link: "/README" },
]

const servicesLinks: LinkObject[] = [
	{ name: "screen repair", link: "/services#repair-services-tag" },
	{ name: "battery replacement", link: "/services#repair-services-tag" },
	{ name: "water damage", link: "/services#repair-services-tag" },
	{ name: "button repair", link: "/services#repair-services-tag" },
	{ name: "camera repair", link: "/services#repair-services-tag" },
	{ name: "speaker repair", link: "/services#repair-services-tag" },
	{ name: "data recovery", link: "/services#repair-services-tag" },
	{ name: "board repair", link: "/services#repair-services-tag" },
]

const coverageLinks: LinkObject[] = [
	{ name: "iphone", link: "/services#iphone-tag" },
	{ name: "samsung", link: "/services#samsung-tag" },
	{ name: "smartphone", link: "/services#smartphone-tag" },
	{ name: "flip phone", link: "/services#flipphone-tag" },
	{ name: "tablet", link: "/services#tablet-tag" },
	{ name: "computer", link: "/services#computer-tag" },
]
