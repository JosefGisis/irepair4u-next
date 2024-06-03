"use client"

import React, { useEffect, useState } from "react"
import {
	Box,
	Toolbar,
	Button,
	IconButton,
	Container,
	AppBar,
} from "@mui/material"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import { colorTheme } from "../../../styles/colorTheme"
import ScrollToTop from "./ScrollToTop"
import DropdownMenu from "./DropdownMenu"

export const pages = [
	{ name: "ABOUT", link: "/about" },
	{ name: "SERVICES", link: "/services" },
	{ name: "FAQ", link: "/faq" },
	{ name: "CONTACT US", link: "/contact-us" },
]

function ResponsiveAppBar() {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const { redAccent, redAccentContrast } = colorTheme

	// Check if user has scrolled down the page and change Appearance
	const [scrolling, setScrolling] = useState(false)
	useEffect(() => {
		const onScroll = () => {
			setDropdownOpen(false)
			const isScrolling = document.documentElement.scrollTop > 10
			setScrolling(isScrolling)
		}
		window.addEventListener("scroll", onScroll)
		return () => {
			window.removeEventListener("scroll", onScroll)
		}
	}, [])

	return (
		<div>
			<ScrollToTop scrolling={scrolling} />

			<AppBar
				position="static"
				sx={{ backgroundColor: redAccentContrast, color: redAccent }}>
				<Container maxWidth="lg">
					<Toolbar
						disableGutters
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}>
						<Link href="/">
							<img
								src="/images/irepair4u_red_transparent_100x860.svg"
								alt="irepair4u banner"
								style={{ height: 35 }}
							/>
						</Link>
						<Box
							sx={{
								display: { xs: "flex", md: "none" },
							}}>
							<IconButton
								size="large"
								onClick={() => setDropdownOpen(!dropdownOpen)}
								color="inherit">
								<MenuIcon
									style={{
										width: 35,
										height: 35,
										color: redAccent,
									}}
								/>
							</IconButton>
						</Box>
						<Box
							sx={{
								display: { xs: "none", md: "flex" },
							}}>
							{pages.map((page, index) => (
								<Link key={index} href={page.link}>
									<Button
										variant={
											page.name === "CONTACT US"
												? "contained"
												: "text"
										}
										sx={{
											ml: 2,
											my: 2,
											background:
												page.name === "CONTACT US"
													? redAccent
													: "inherit",
											color:
												page.name === "CONTACT US"
													? redAccentContrast
													: "rgb(0, 0, 0)",
											display: "block",
										}}>
										{page.name}
									</Button>
								</Link>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<DropdownMenu dropdownOpen={dropdownOpen} setDropdownOpen={setDropdownOpen}/>
		</div>
	)
}
export default ResponsiveAppBar
