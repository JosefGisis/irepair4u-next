import type { Metadata } from "next"

export const metadata: Metadata = { title: "iRepair4u - README" }

export default function ReadMePage() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
				fontSize: "1rem",
				fontFamily: "Courier New, Courier, monospace",
				color: "#FFFFFF",
				backgroundColor: "#000000",
				padding: "2rem",
				position: "absolute",
				left: "0",
				top: "0",
				width: "100vw",
				minHeight: "100vh",
			}}>
			<p>
				Hello and welcome to iRepair4U! This is a website for iRepair4u
				LLC, the one in Lakewood, New Jersey.
			</p>

			<p>
				This website is a static information site intended to provide
				information to potential customers (it is not an ecommerce site
				nor does it process payments).
			</p>

			<p>
				This website is constructed in NextJS using TypeScript and
				MaterialUI. This site also uses TinaCMS to manage content and
				design.
			</p>

			<p>
				You can find the source code for this website at
				https://github.com/JosefGisis/irepair4u-next-tina. Feel free to
				contact the author through GitHub.
			</p>

			<p>
				Click{" "}
				<a style={{ color: "rgb(255, 30, 70)" }} href="/">
					<span style={{ textDecoration: "underline" }}>here</span>
				</a>{" "}
				to go back to the home page.
			</p>

			<p>-Josef Gisis 5/28/2024</p>
		</div>
	)
}
