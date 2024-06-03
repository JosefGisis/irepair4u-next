import React from "react"

import type { Metadata } from "next"
import WelcomeHero from "./components/WelcomeHero"
import HomePageAboutSection from "./components/HomePageAboutSection"
import HomePageServicesSection from "./components/HomePageServicesSection"
import WarrantyBanner from "./components/WarrantyBanner"

export const metadata: Metadata = {
	title: "iRepair4u - home",
}

export default function page() {
	return (
		<div
			id="home-page-content"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<WelcomeHero />
			<HomePageAboutSection />
			<HomePageServicesSection />
			<WarrantyBanner />
		</div>
	)
}
