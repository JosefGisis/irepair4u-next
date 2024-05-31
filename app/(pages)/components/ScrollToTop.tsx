import { Box } from "@mui/material"
import { colorTheme } from "../../../styles/colorTheme"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"
import { light } from "@mui/material/styles/createPalette"

export default function ScrollToTop({ scrolling }: { scrolling: boolean }) {
	const { redAccent, redAccentContrast, lighterRedAccent } = colorTheme
	return (
		<Box
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			sx={{
				position: "fixed",
				bottom: scrolling ? 0 : "-6rem",
				right: "5%",
				padding: "0.4rem",
				paddingInline: "0.5rem",
				zIndex: 1000,
				background: lighterRedAccent,
				"&:hover": { background: redAccent },
				color: redAccentContrast,
				borderTopLeftRadius: 6,
				borderTopRightRadius: 6,
				borderLeft: `1px solid ${redAccentContrast}`,
				borderRight: `1px solid ${redAccentContrast}`,
				borderTop: `1px solid ${redAccentContrast}`,
				transition: "bottom 0.5s ease-in-out",
			}}>
			<KeyboardDoubleArrowUpIcon sx={{ width: "3rem", height: "3rem" }} />
		</Box>
	)
}
