import { Typography } from "@mui/material"

export default function SeeYouSoon() {
	return (
		<section
			id="image section"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginTop: "2rem",
				marginBottom: "3.5rem",
			}}>
			<img
				src="images/waving_android_improved.svg"
				alt="Image of waving android"
				width="275px"
				height="275px"
			/>
			<div>
				<Typography textAlign="center" variant="h2">
					SEE YOU SOON!
				</Typography>
			</div>
		</section>
	)
}
