import * as React from "react"
import { Container, Typography, Box } from "@mui/material"

import type { Metadata } from "next"
import { widths } from "../../../styles/widths"

export const metadata: Metadata = {
	title: "iRepair4u - FAQ",
}

export default function FAQPage() {
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
				style={{ marginBottom: "1rem", marginTop: "3rem" }}>
				FAQ
			</Typography>

			<Typography variant="h5" marginBottom="2rem">
				Here are some questions are customers frequently ask us.
			</Typography>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					marginBottom: "3rem",
				}}>
				{faqTextContent.map((section, index) => (
					<div key={index} style={{ width: "100%" }}>
						<Typography variant="subtitle1" marginBottom="1rem" marginTop="1.5rem">
							Q. {section.q}
						</Typography>
						<Typography marginBottom="1rem" variant="body2">{section.a}</Typography>
					</div>
				))}
			</div>
		</section>
	)
}

export type FAQTextContentType = { q: string; a: string }[]

const faqTextContent: FAQTextContentType = [
	{
		q: "My phone fell into water. Should I put it in rice?",
		a: "Save your rice for cooking. Rice not only does not help, but it can also cause more damage by making your charging port dirty. When your phone falls into water you need to bring it to a phone repair shop, so they can open it and dry it out. However, you can improve your phone’s chances of surviving by not pressing any buttons and just submerging it in rubbing alcohol (70% alcohol, plus). This may seem counterintuitive, but it is not the water itself that causes your phone to short circuit; rather, it is the minerals found in water (something rubbing alcohol does not have). The rubbing alcohol may save your phone while you are waiting to bring it to a repair shop.",
	},
	{
		q: "Do you fix flip phones?",
		a: "Yes we fix most flip phones. Give us a call, so we can provide more information about our services.",
	},
	{
		q: "Are your replacement parts original?",
		a: "Unless we can salvage a part from another phone, all parts are aftermarket. This is the case because top phone and tablet manufacturers do not sell original parts for their products.",
	},
	{
		q: "Which repairs are covered by your 90 day warranty?",
		a: "All repairs! We stand behind our work. So if something we fixed stops working, bring it back to us and we’ll make it right.",
	},
	{
		q: "You recently fixed my cracked screen, but now my speaker is no longer working. Is that covered by your warranty?",
		a: "Sorry. No. Unless the speaker has stopped working due to the repair we conducted. The same goes for any damages not related to our work.",
	},
	{
		q: "What happens if iRepair4U cannot save my damaged phone? Do I still need to pay for the attempt?",
		a: "Depends. With some repairs, such as screen repairs, battery replacements,speaker repairs, etc., we will not charge you if we cannot fix your device. However, when it comes to water damage repairs, it is uncertain if the phone can be recovered and oftentimes there is nothing we can do to save the device. With those kinds of services we may still charge a fee.",
	},
	{
		q: "Can I bring my phone over any time during business hours?",
		a: "You can, but we would recommend calling us first, so we can make time for you and provide more information about your repair. We also may not cover your device or have the necessary parts in stock at the moment, so we suggest giving us a call beforehand.",
	},
	{
		q: "Do you list repair prices?",
		a: "Unfortunately, no. Prices may vary depending on fluctuating prices for parts. Give us a call, so we can give you a quote!",
	},
]
