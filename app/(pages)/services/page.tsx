import * as React from "react"
import { Typography } from "@mui/material"

import type { Metadata } from "next"
import { widths } from "../../../styles/widths"

export const metadata: Metadata = {
	title: "iRepair4u - FAQ",
}

export default function ServicesPage() {
	const { tenColumn } = widths
	return (
		<section
			id="about-page"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				maxWidth: tenColumn,
				marginInline: "auto",
				paddingInline: "20px",
			}}>
			{/* detailed about us information */}

			<Typography
				textAlign="center"
				variant="h1"
				style={{ marginBottom: "2rem", marginTop: "3rem" }}>
				SERVICES
			</Typography>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				{servicesTextContent.map((section, index) => (
					<div key={index} style={{ width: "100%" }}>
						<Typography
							variant="h5"
							style={{ marginTop: "1rem", marginBottom: "1rem" }}>
							{section.section}
						</Typography>
						{section.services.map((service, index) => (
							<div key={index} id={service.id}>
								<Typography
									variant="subtitle1"
									style={{ marginBottom: "0.6rem" }}>
									● {service.service}
								</Typography>
								<Typography
									variant="body1"
									style={{ marginBottom: "0.6rem" }}>
									{service.description}
								</Typography>
							</div>
						))}
					</div>
				))}
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBlock: "4rem",
				}}>
				<Typography textAlign="center" variant="h4" marginBottom="3rem">
					Don't see what you are looking for? No worries! Just give us
					a call.
				</Typography>

				<img
					style={{ width: "100%" }}
					src="images/pexels-gabriel-freytez-5184x3456-corrected-reduced.jpg"
					alt="Image of multiple apple devices stacked on top of each other"
				/>
			</div>
		</section>
	)
}

export type ServiceTextContentType = {
	section: string
	section_id: string
	services: { service: string; description: string; id: string }[]
}[]
const servicesTextContent: ServiceTextContentType = [
	{
		section: "Repair Services",
		section_id: "repair-services-tag",
		services: [
			{
				service: "Screen repair/replacement",
				description: "",
				id: "screen-repair-tag",
			},
			{
				service: "Battery replacement",
				description: "",
				id: "battery-replacement-tag",
			},
			{
				service: "Water Damage Recovery",
				description: "",
				id: "water-damage-tag",
			},
			{
				service: "Button repair",
				description: "",
				id: "button-repair-tag",
			},
			{
				service: "Camera repair",
				description: "",
				id: "camera-repair-tag",
			},
			{
				service: "Speaker/microphone repair",
				description: "",
				id: "speaker-repair-tag",
			},
			{
				service: "Data recovery",
				description: "",
				id: "data-recovery-tag",
			},
			{
				service: "Back cover repairs",
				description: "",
				id: "back-repair-tag",
			},
			{
				service: "Board repairs",
				description: "",
				id: "board-repair-tag",
			},
		],
	},
	{
		section: "Coverage",
		section_id: "coverage-tag",
		services: [
			{
				service: "iPhones",
				description:
					"We perform all repair services for all iPhone models. We also cover Apple products like iPods and iPads.",
				id: "iphone-tag",
			},
			{
				service: "Samsung",
				description: "We cover all Samsung models.",
				id: "samsung-tag",
			},
			{
				service: "Smartphones",
				description:
					"We cover many common android makes, such as Motorola, OnePlus, Pixel, Sony, LG, etc.",
				id: "smartphone-tag",
			},
			{
				service: "Flip phones",
				description:
					"Contact us with the make and specifications of your phone, so we can provide more repair information.",
				id: "flipphone-tag",
			},
			{
				service: "Tablets",
				description:
					"We primarily fix Ipads, other tablets are served on a case by case basis.",
				id: "tablet-tag",
			},
			{
				service: "Computer",
				description:
					"Contact us with the make and specifications of your computer, so we can provide more repair information.",
				id: "computer-tag",
			},
		],
	},
	{
		section: "SALES",
		section_id: "sales-tag",
		services: [
			{
				service: "Accessories",
				description:
					"We sell all your phone accessories. We sell screen protectors, cases, phone mounts, chargers, and more.",
				id: "accessories-sales-tag",
			},
			{
				service: "Phones",
				description:
					"We sell refurbished phone. Availability depends on damaged phones we acquire.",
				id: "phone-sales-tag",
			},
		],
	},
]
