import { Box, Container, Typography } from "@mui/material"
import Link from "next/link"

export default function NotFound() {
	return (
		<Container maxWidth="lg">
			<Box maxWidth="38.75rem">
				<Typography variant="h4" textAlign="center">
					404 :/
				</Typography>
				<Typography variant="h5" textAlign="center">
					Page not found
				</Typography>
				<Typography variant="body1" textAlign="center">
					Click <Link href="/">here</Link>to be redirected to our home
					page.
				</Typography>
				<img src="/images/kostiantyn-li-Fi_nhg5itCw-unsplash.jpg" />
			</Box>
		</Container>
	)
}
