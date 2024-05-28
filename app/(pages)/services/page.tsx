import * as React from "react"
import { Container, Typography, Box } from "@mui/material"

import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "iRepair4u - FAQ",
}

export default function ServicesPage() {
	return (
		<Box
			component="section"
			id="about-page"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<Container maxWidth="lg">
				{/* detailed about us information */}
				<Box maxWidth="38.75rem">
					<Typography textAlign="center" variant="h4">
						Services
					</Typography>
				</Box>

				<Box
					maxWidth="43.75rem"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					{servicesTextContent.map((section, index) => (
						<Box key={index} maxWidth="43.75rem">
							<Typography textAlign="center" variant="h6">
								{section.section}
							</Typography>
							{section.services.map((service, index) => (
								<Box key={index} id={service.id}>
									<Typography variant="h6">
										{service.service}
									</Typography>
									<Typography variant="body2">
										{service.description}
									</Typography>
								</Box>
							))}
						</Box>
					))}
				</Box>
				<Box
					maxWidth="58.75rem"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Box maxWidth="43.75rem">
						<Typography textAlign="center" variant="h6">
							Don't see what you are looking for? No worries! Just
							give us a call.
						</Typography>
					</Box>

					<Box maxWidth="48.75rem">
						<img
							src="images/pexels-gabriel-freytez-5184x3456-corrected-reduced.jpg"
							alt="Image of multiple apple devices stacked on top of each other"
						/>
					</Box>
				</Box>
			</Container>
		</Box>
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
