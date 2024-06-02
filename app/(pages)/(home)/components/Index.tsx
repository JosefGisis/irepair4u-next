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
	const blocks = data.home.blocks?.[0]
	const welcomeHero = blocks?.welcomeHero
	const homePageAbout = blocks?.homePageAbout
	const homePageServices = blocks?.homePageServices
	const warrantyBanner = blocks?.warrantyBanner

	return (
		<>
			{welcomeHero && <WelcomeHero {...welcomeHero} />}
			{homePageAbout && <HomePageAboutSection {...homePageAbout} />}
			{homePageServices && (
				<HomePageServicesSection {...homePageServices} />
			)}
			{warrantyBanner && <WarrantyBanner {...warrantyBanner} />}
		</>
	)
}
