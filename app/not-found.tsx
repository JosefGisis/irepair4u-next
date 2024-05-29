import Link from "next/link"
import { Container, Card, CardContent, Typography, Box } from "@mui/material"
import { colorTheme } from "../styles/colorTheme"
// import { redirect } from "next/navigation"

export default function NotFound() {
	return (
		<Container maxWidth="lg">
			<Box
				maxWidth="38.75rem"
				marginInline="auto"
				marginTop="3rem"
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Typography
					fontSize="5rem"
					fontWeight={900}
					color={colorTheme.redAccent}
					textAlign="center">
					404 :/
				</Typography>
				<Typography
					fontSize="3rem"
					fontWeight={700}
					color={colorTheme.shadowColor}
					sx={{ fontSize: "3rem", textColor: colorTheme.grayAccent }}
					textAlign="center">
					Page Not Found
				</Typography>
				<Typography variant="subtitle1" fontSize="1.5rem" textAlign="center" marginTop="1rem">
					Click{" "}
					<span
						style={{
							textDecoration: "underline",
							color: colorTheme.redAccent,
						}}>
						<Link href="/">here</Link>
					</span>
					{" "}
					to be redirected to our home page.
				</Typography>
				<img src="/images/kostiantyn-li-Fi_nhg5itCw-unsplash.jpg" />
			</Box>
		</Container>
	)
}
