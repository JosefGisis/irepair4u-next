"use client"

import HomePageAboutSection from "./HomePageAboutSection"
import HomePageServicesSection from "./HomePageServicesSection"
import WarrantyBanner from "./WarrantyBanner"
import WelcomeHero from "./WelcomeHero"

import type { PageQuery } from "../../../../tina/__generated__/types"
import type { Exact } from "../../../../tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

export default function Components(props: {
	data: PageQuery
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
    console.log(data.page.blocks)
	return (
		<>
			{data?.page?.blocks?.map((block, index) => {
                console.log(block)
                switch (block?.__typename) {
                    case "PageBlocks": return null
                }
			})}
		</>
	)
}
