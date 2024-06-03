import ResponsiveAppBar from "./components/Appbar"
import Footer from "./(footer)/Footer"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<ResponsiveAppBar />
					<div className="background-image">
						<img
							src="images/irepair4u_icon_red_transparent_300x300.svg"
							width="300px"
							height="300px"
						/>
					</div>

					<div style={{ flex: 1, minHeight: "62vh" }}>
						<main>{children}</main>
					</div>

					<Footer />
				</div>
			</body>
		</html>
	)
}
