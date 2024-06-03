import { Box } from "@mui/material"
import Link from "next/link"

export default function FooterLogo() {
	return (
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
	)
}
