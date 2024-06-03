"use client"

import HomePageAboutSection from "./HomePageAboutSection"
import HomePageServicesSection from "./HomePageServicesSection"
import WarrantyBanner from "./WarrantyBanner"
import WelcomeHero from "./WelcomeHero"

import type { HomeQuery } from "../../../../tina/__generated__/types"
import type { Exact } from "../../../../tina/__generated__/types"
import { useTina } from "tinacms/dist/react"

export default function Components(props: {
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
		<>
			{data.home.blocks?.map((block, index) => {
				console.log(block)
				switch (block?.__typename) {
					case "HomeBlocksWelcomeHero":
						return <WelcomeHero key={index} {...block} />
					case "HomeBlocksHomePageAbout":
						return <HomePageAboutSection 
						key={index} {...block} />
					case "HomeBlocksHomePageServices":
						return (
							<HomePageServicesSection key={index} {...block} />
						)
					case "HomeBlocksWarrantyBanner":
						return <WarrantyBanner key={index} {...block} />
					default:
						return null
				}
			})}
		</>
	)
}
