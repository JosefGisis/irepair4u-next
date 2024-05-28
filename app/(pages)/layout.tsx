import ResponsiveAppBar from "./components/Appbar"

import Footer from "./components/Footer"
import { Box } from "@mui/material"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<ResponsiveAppBar />

					<Box sx={{ flex: 1, minHeight: "62vh", mt: 10 }}>
						<main>{children}</main>
					</Box>

					<Footer />
				</Box>
			</body>
		</html>
	)
}
