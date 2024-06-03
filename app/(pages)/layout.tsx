import ResponsiveAppBar from "./components/Appbar"
import Footer from "./components/Footer"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<ResponsiveAppBar />
			<div className="background-image">
				<img
					src="images/irepair4u_icon_red_transparent_300x300.svg"
					width="300px"
					height="300px"
				/>
			</div>

			<div style={{ flex: 1, minHeight: "62vh" }}>{children}</div>

			<Footer />
		</div>
	)
}
