"use client"

import { useTina } from "tinacms/dist/react"
import { type ServicesQuery } from "../../../../tina/__generated__/types"
import type { Exact } from "../../../../tina/__generated__/types"
import RepairsSection from "./RepairsSection"
import CoverageSection from "./CoverageSection"
import SalesSection from "./SalesSection"

export default function ServicesComponents(props: {
	data: ServicesQuery
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
		<>
			{data?.services?.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "ServicesBlocksRepairsSection":
						return <RepairsSection key={index} {...block} />
					case "ServicesBlocksCoverageSection":
						return <CoverageSection key={index} {...block} />
					case "ServicesBlocksSalesSection":
						return <SalesSection key={index} {...block} />
					default:
						return null
				}
			})}
		</>
	)
}
