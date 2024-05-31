import { colorTheme } from "../../../styles/colorTheme"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"

export default function ScrollToTop({ scrolling }: { scrolling: boolean }) {
    const { redAccent, redAccentContrast } = colorTheme
	return (
		<div
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			style={{
				position: "fixed",
				bottom: scrolling ? 0 : "-6rem",
				right: "5%",
				padding: "0.4rem",
				paddingInline: "0.5rem",
				zIndex: 1000,
				backgroundColor: redAccent,
				color: redAccentContrast,
				borderTopLeftRadius: 6,
				borderTopRightRadius: 6,
				borderLeft: `1px solid ${redAccentContrast}`,
				borderRight: `1px solid ${redAccentContrast}`,
				borderTop: `1px solid ${redAccentContrast}`,
				transition: "all 0.5s ease-in-out",
			}}>
			<KeyboardDoubleArrowUpIcon sx={{ width: "3rem", height: "3rem" }} />
		</div>
	)
}
