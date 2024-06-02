"use client"

import AboutSection from "./AboutSection"
import TermsAndConditions from "./TermsAndConditions"

import type { Exact } from "../../../../tina/__generated__/types"
import { useTina } from "tinacms/dist/react"
import type { AboutQuery } from "../../../../tina/__generated__/types"
import SeeYouSoon from "./SeeYouSoon"

export default function AboutComponents(props: {
	data: AboutQuery
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
			{data.about.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "AboutBlocksAboutSegment":
						return <AboutSection key={index} {...block} />
				}
			})}
			<SeeYouSoon />
			{data.about.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "AboutBlocksTermsAndConditions":
						return <TermsAndConditions key={index} {...block} />
				}
			})}
		</>
	)
}
