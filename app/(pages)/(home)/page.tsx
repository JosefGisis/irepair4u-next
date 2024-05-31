import React from "react"
import Link from "next/link"
import { Container, Box, Typography, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ServicesCard from "./components/ServicesCard.server"
import { widths } from "../../../styles/widths"
import { colorTheme } from "../../../styles/colorTheme"
import {
	WelcomeHeroBlockBackup,
	homePageAboutContent,
	homePageServicesContent,
	warrantyBannerContent,
} from "./homePageBackupContent"

import type { Metadata } from "next"
// import type { PageBlocksWelcomeHero } from "../../../tina/__generated__/types"
import client from "../../../tina/__generated__/client"
import HomePageServicesSection from "./components/HomePageServicesSection.server"
import HomePageAboutSection from "./components/HomePageAboutSection.server"
import WelcomeHero from "./components/WelcomeHero.server"
import WarrantyBanner from "./components/WarrantyBanner.server"

export const metadata: Metadata = {
	title: "iRepair4u - home",
}

export default async function page() {
	// const result = await client.queries.page({ relativePath: "Home.md" })

	// const heroBlock = result?.data?.page?.blocks?.find(
	// 	(block) => block?.__typename === "PageBlocksWelcomeHero"
	// ) as PageBlocksWelcomeHero | undefined

	const { sixColumn, eightColumn, nineColumn } = widths
	const { redAccent, redAccentContrast, grayAccent } = colorTheme

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
