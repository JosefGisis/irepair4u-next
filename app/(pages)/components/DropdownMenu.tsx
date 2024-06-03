import { pages } from "./Appbar"
import { Box, Typography } from "@mui/material"
import { colorTheme } from "../../../styles/colorTheme"
import Link from "next/link"

export default function DropdownMenu({dropdownOpen, setDropdownOpen}: { dropdownOpen: boolean, setDropdownOpen: (value: boolean) => void }) {
	const { redAccentContrast, shadowColor, grayAccent } = colorTheme
	return (
		<Box
			sx={{
				display: { xs: dropdownOpen ? "block" : "none", md: "none" },
				position: "absolute",
				width: "100%",
				borderBottom: `5px solid ${shadowColor}`,
			}}>
			<div style={{ display: "flex", flexDirection: "column" }}>
				{pages.map((page, index) => (
					<Link href={page.link} key={index}>
						<Box
							onClick={() => setDropdownOpen(false)}
							sx={{
								background: grayAccent,
								paddingBlock: "1rem",
								paddingInline: "1.5rem",
								"&:hover": {
									background: shadowColor,
									color: redAccentContrast,
								},
							}}
							key={index}>
							<Typography variant="subtitle2">
								{page.name}
							</Typography>
						</Box>
					</Link>
				))}
			</div>
		</Box>
	)
}
