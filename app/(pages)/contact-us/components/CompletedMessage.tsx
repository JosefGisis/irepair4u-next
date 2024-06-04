import { Box, Button } from "@mui/material"
import { Typography } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"

export default function ({
	setCompleted,
}: {
	setCompleted: (completed: boolean) => void
}) {
	const { redAccentContrast, grayAccent, redAccent } = colorTheme
	return (
		<div>
			<Box
				sx={{
					marginBottom: "1.5rem",
					padding: "0.5rem",
					background: `linear-gradient(to bottom right, ${redAccentContrast}, ${grayAccent})`,
					color: redAccent,
				}}>
				<Typography textAlign="center" variant="h4">
					Thank you for reaching out to us!
				</Typography>
			</Box>
			<Typography
				marginBottom="1.5rem"
				textAlign="center"
				variant="subtitle1">
				We have received your request and will get back to you as soon
				as possible.
			</Typography>
			<div
				style={{
					marginBottom: "4rem",
					marginInline: "auto",
					display: "flex",
					justifyContent: "center",
				}}>
				<Button onClick={() => setCompleted(false)} variant="outlined">
					Submit a new request
				</Button>
			</div>
		</div>
	)
}
