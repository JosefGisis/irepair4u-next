import { Box, Typography, Container } from "@mui/material"
import PlaceIcon from "@mui/icons-material/Place"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { colorTheme } from "../../../styles/colorTheme"
import Link from "next/link"

export default function Footer() {
	const { redAccent, redAccentContrast } = colorTheme
	return (
		<div
			style={{
				backgroundColor: redAccent,
				color: redAccentContrast,
			}}>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						gap: "40px",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						mt: "18px",
					}}>
					<div
						id="business-links"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: 15,
						}}>
						{/* logo and home page links */}
						<Box sx={{ marginInline: { xs: "auto", md: 0 } }}>
							<Link href="/">
								<div style={{ display: "flex", gap: "8px" }}>
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
								</div>
							</Link>
						</Box>

						{/* contact information links */}
						<div style={{ display: "flex", gap: 10 }}>
							<LocalPhoneIcon />
							<Typography id="phone" className="footer-link">
								<a href="tel:732-330-3038">(732)-330-3038</a>
							</Typography>
						</div>

						<div style={{ display: "flex", gap: 10 }}>
							<EmailIcon />
							<Typography id="email" className="footer-link">
								<a
									className="footer-link"
									href="mailto:iRepairr4u@gmail.com">
									iRepairr4u@gmail.com
								</a>
							</Typography>
						</div>

						<div style={{ display: "flex", gap: 10 }}>
							<PlaceIcon />
							<Typography id="address" className="footer-item">
								<a
									className="footer-link"
									href="https://www.google.com/maps/place/iRepair4U+LLC/@40.1038409,-74.2717807,17z/data=!3m1!4b1!4m6!3m5!1s0x89c179553fca4843:0x689de9999043f34b!8m2!3d40.1038368!4d-74.2692058!16s%2Fg%2F11vkkr95w1?entry=ttu">
									750 Green Valley rd., Jackson, NJ 08527
								</a>
							</Typography>
						</div>

						{/* hours section */}
						<div
							id={hoursContent.id || ""}
							style={{
								display: "flex",
								flexDirection: "column",
								gap: 5,
								marginTop: "20px",
							}}>
							<Typography
								variant="h6"
								style={{ marginBottom: "5px" }}>
								Hours
							</Typography>

							{hoursContent.hours.map((item, index) => (
								<div
									key={index}
									style={{ display: "flex", gap: 20 }}>
									<Typography>{item.day} : </Typography>
									<Typography>{item.hours}</Typography>
								</div>
							))}
						</div>
					</div>

					{/* links section */}
					{footerLinksContent.map((item, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "18px",
								alignItems: { xs: "center", md: "start" },
								textWrap: "nowrap",
							}}>
							<Typography variant="h6">{item.title}</Typography>

							{item.links.map((link, index) => (
								<Link key={index} href={link.link}>
									<Typography
										style={{ textWrap: "nowrap" }}
										variant="body2"
										className="footer-link"
										width="fit-content">
										{link.name}
									</Typography>
								</Link>
							))}
						</Box>
					))}
				</Box>

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

export const hoursContent: {
	id?: string
	hours: { day: string; hours: string }[]
} = {
	id: "hours-of-operation",
	hours: [
		{ day: "Sun - Thu", hours: "11:00am - 5:00pm" },
		{ day: "Friday", hours: "11:00am - 2:00pm" },
		{ day: "Saturday", hours: "closed" },
	],
}

export const footerLinksContent: {
	id?: string
	title: string
	links: { name: string; link: string }[]
}[] = [
	{
		id: "information-links",
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
		id: "services-links",
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
		id: "coverage-links",
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
