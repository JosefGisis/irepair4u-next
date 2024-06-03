import { Box } from "@mui/material"
import { colorTheme } from "../../../styles/colorTheme"
import { useState } from "react"

export default function HamburgerIcon({ open }: { open: boolean }) {
	const { redAccent, lighterRedAccent } = colorTheme
	const [hovering, setHovering] = useState(false)

	return (
		<Box
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			sx={{
				cursor: "pointer",
				width: 40,
                padding: "5px",
				background: "transparent",
				outline: "none",
				outlineColor: "none",
				WebkitTapHighlightColor: "transparent",
			}}>
			{Array.from({ length: 3 }).map((_, index) => (
				<Box
					className="bar"
					sx={{
						background: hovering
							? "rgba(255, 30, 70, 0.7)"
							: redAccent,
						height: "4px",
						margin: open ? "7px 0" : "4px 0",
						transition: "all 150ms ease-in-out",
						webkitTransition: "all 150ms ease-in-out",
						MozTransition: "all 150ms ease-in-out",
						OTransition: "all 150ms ease-in-out",
						msTransition: "all 150ms ease-in-out",
					}}
					key={index}
				/>
			))}
		</Box>
	)
}
