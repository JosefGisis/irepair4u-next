import * as React from "react"
import { Container, Typography, Box } from "@mui/material"
import { title } from "process"

export default function AboutPage() {
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
						ABOUT US
					</Typography>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					{aboutPageContent.map((section, index) => (
						<Box key={index} maxWidth="43.75rem">
							<Typography textAlign="center" variant="h6">
								{section.title}
							</Typography>
							{section.paragraphs.map((paragraph, index) => (
								<Typography
									key={index}
									variant="body2"
									textAlign="center">
									{paragraph}
								</Typography>
							))}
						</Box>
					))}

					{/* image section */}
					<Box
						id="image section"
						component="section"
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<img
							src="images/waving_android_improved.svg"
							alt="Image of waving android"
							width="275px"
							height="275px"
						/>
						<Box maxWidth="43.75rem">
							<Typography textAlign="center" variant="h6">
								SEE YOU SOON!
							</Typography>
						</Box>
					</Box>

					{/* terms and conditions section */}
					<Box
						component="section"
						id="terms-and-conditions"
						maxWidth="48.75rem"
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							backgroundColor: "#D2D2D2",
						}}>
						<Box maxWidth="43.75rem">
							<Typography variant="h6" textAlign="center">
								TERMS AND CONDITIONS
							</Typography>
						</Box>

						<Box>
							{termsAndConditions.map((section, index) => (
								<Box key={index} maxWidth="43.75rem">
									<Typography variant="h6" textAlign="center">
										{section.title}
									</Typography>
									{section.paragraphs.map(
										(paragraph, index) => (
											<Typography
												key={index}
												variant="body2"
												textAlign="center">
												{paragraph}
											</Typography>
										)
									)}
								</Box>
							))}
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export type AboutPageContent = { title: string; paragraphs: string[] }[]

const aboutPageContent: AboutPageContent = [
	{
		title: "OUR START",
		paragraphs: [
			"Established in 2014 by Mark (Mattis) Gisis from his apartment in Lakewood, New Jersey, iRepair4u started off with his first phone repair, an iPhone 4 he purchased from a friend for $80. Since then, he has fixed thousands of devices and has made many satisfied customers. Mark's honesty, friendly demeanor, and quality work gained a reputation, laying the foundation of what is the current iRepair4u.",
			"We have expanded our business to meet the needs of our growing community, and our repair shop is now located in Jackson, New Jersey, just five minutes out of Lakewood.",
		],
	},
	{
		title: "WHAT WE DO",
		paragraphs: [
			"We offer a comprehensive range of services tailored to meet the needs of our valued customers. We specialize in iPhone and Samsung repairs, but we also service all popular smartphone makes and models, such Motorola, LG, Google, and OnePlus. We also provide data recovery, entry-level logic board diagnostics, and soldering services.",
			"Recognizing the unique preferences of the Lakewood community, we are pleased to provide dedicated services for flip phones and other dumb phones.",
			"We deliver solutions with precision and efficiency, ensuring your devices receive the care and attention they deserve. For a full listing of our services and device coverage, check out our services page.",
		],
	},
	{
		title: "QUALITY AND AFFORDABILITY",
		paragraphs: [
			"Since our beginning, we have set customer service, affordability, and quality work as the cornerstone of our business. We pride ourselves in passing savings on to our customers without compromising on the quality of our work, all while providing a warm and welcoming environment.",
			"Our commitment to excellence has made us the top referral from local phone carrier stores, businesses, and customers.",
			"We are your one stop shop for all you mobile device needs and accessories. Looking forward to greeting you!",
		],
	},
]

const termsAndConditions: AboutPageContent = [
	{
		title: "Service Agreement",
		paragraphs: [
			"The customer agrees to the terms and conditions outlined herein upon availing phone repair services from iRepair4U LLC.",
			"iRepair4U LLC will provide repair services as described in the service request.",
			"iRepair4U LLC will assess the device and inform the customer of the repair options and costs.",
		],
	},
	{
		title: "Cost and Payment",
		paragraphs: [
			"Repair costs include parts, labor, and any additional services agreed upon.",
			"Payment is due upon completion of the repair.",
			"iRepair4U LLC reserves the right to withhold the repaired device until payment is received.",
		],
	},
	{
		title: "Warranty",
		paragraphs: [
			"All repairs are covered by a free 90-day warranty against defects in workmanship and materials.",
			"The 90 day warranty starts on the first day the customer receives the repaired device. All Repairs following the warranty period are subject to full repair fees.",
			"This warranty does not cover damage resulting from mishandling or unauthorized modifications.",
		],
	},
	{
		title: "Phone Sales",
		paragraphs: [
			"All sales of phones refurbished by iRepair4u are covered by a free 90-day warranty.",
			"The customer is entitled to a full refund or replacement if the refurbished device stops working within the 90-day warranty period and iRepair4U LLC can not repair it.",
			"This warranty does not cover damage resulting from mishandling or unauthorized modifications to the device.",
			"iRepair4u LLC reserves the right to subtract refund total to cover damages to salvageable device parts resulting from mishandling or unauthorized modifications to the device.",
		],
	},
	{
		title: "Customer Responsibilities",
		paragraphs: [
			"Customers are responsible for backing up their data before submitting devices for repair.",
			"iRepair4U LLC is not liable for any loss of data during the repair process.",
		],
	},
	{
		title: "Turnaround Time",
		paragraphs: [
			"iRepair4U LLC will make reasonable efforts to complete repairs in a timely manner.",
			"Delays may occur due to unforeseen circumstances, and iRepair4U LLC will communicate any changes in the estimated completion time.",
		],
	},
	{
		title: "Liability",
		paragraphs: [
			"iRepair4U LLC is not liable for any indirect, consequential, or incidental damages.",
			"The total liability of iRepair4U LLC shall not exceed the total amount paid by the customer for the repair services.",
		],
	},
	{
		title: "By availing of our phone repair services, the customer acknowledges and agrees to these terms and conditions.",
		paragraphs: [],
	},
]
