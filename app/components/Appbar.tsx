"use client"

import * as React from "react"
import {
	MenuItem,
	Box,
	Toolbar,
	Button,
	IconButton,
	Container,
	Menu,
	Typography,
	AppBar,
} from "@mui/material"
import Link from "next/link"
import MenuIcon from "@mui/icons-material/Menu"
import { colorTheme } from "../../styles/colorTheme"

const pages = [
	{ name: "About", link: "/about" },
	{ name: "Services", link: "/services" },
	{ name: "FAQ", link: "/faq" },
	{ name: "Contact Us", link: "/contact-us" },
]

function ResponsiveAppBar() {
	const { redAccent, redAccentContrast } = colorTheme

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	)

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar
			position="fixed"
			sx={{ backgroundColor: redAccentContrast, color: redAccent }}>
			<Container maxWidth="lg">
				<Toolbar
					disableGutters
					sx={{ display: "flex", justifyContent: "space-between" }}>
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
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon style={{ width: 35, height: 35, color: redAccent }} />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page, index) => (
								<Link key={index} href={page.link}>
									<MenuItem onClick={handleCloseNavMenu}>
										<Typography textAlign="center">
											{page.name}
										</Typography>
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
						}}>
						{pages.map((page, index) => (
							<Link key={index} href={page.link}>
								<Button
									variant={
										page.name === "Contact Us"
											? "contained"
											: "text"
									}
									sx={{
										ml: 2,
										my: 2,
										background: page.name === "Contact Us" ? redAccent : "inherit",
										color:
											page.name === "Contact Us"
												? redAccentContrast
												: "inherit",
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
	)
}
export default ResponsiveAppBar
