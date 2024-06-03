"use client"

import { useTina } from "tinacms/dist/react"
import type { HomeQuery, Exact } from "../../../../tina/__generated__/types"
import ContactLinks from "./ContactLinks"
import Hours from "./Hours"
import FooterLogo from "./FooterLogo"
import { ServicesLinks, InformationLinks } from "./Links"
import { Box } from "@mui/material"

export default function FooterComponents(props: {
	data: HomeQuery
	errors?:
		| {
				message: string
				locations: {
					line: number
					column: number
				}[]
				path: string[]
		  }[]
		| undefined
	variables: Exact<{
		relativePath: string
	}>
	query: string
}) {
	const { data } = useTina(props)
	return (
		<Box
			sx={{
				display: "flex",
				gap: "40px",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "space-between",
			}}>
			<div
				id="business-links"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 15,
				}}>
				<FooterLogo />
				{data?.home?.blocks?.map((block, index) => {
					switch (block?.__typename) {
						case "HomeBlocksContactLinks":
							return <ContactLinks key={index} {...block} />
						case "HomeBlocksHoursOfOperation":
							return <Hours key={index} {...block} />
						default:
							return null
					}
				})}
			</div>
			{data?.home?.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "HomeBlocksInformationLinks":
						return <InformationLinks key={index} {...block} />
					case "HomeBlocksServicesLinks":
						return <ServicesLinks key={index} {...block} />
					case "HomeBlocksCoverageLinks":
						return <ServicesLinks key={index} {...block} />
					default:
						return null
				}
			})}
		</Box>
	)
}
