import React from "react"

import type { Metadata } from "next"
import Components from "./components/Index"
import client from "../../../tina/__generated__/client"

export const metadata: Metadata = {
	title: "iRepair4u - home",
}

export default async function page() {
	const result = await client.queries.page({ relativePath: "New_Home.md" })

	return (
		<div
			id="home-page-content"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Components {...result}/>
		</div>
	)
}
