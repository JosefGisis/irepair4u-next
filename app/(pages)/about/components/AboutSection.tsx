import { Typography } from "@mui/material"

export default function AboutSection() {
	return (
		<div style={{ paddingInline: 20 }}>
			{aboutPageContent.map((card, index) => (
				<div id={card.id || ""} key={index}>
					<Typography variant="h5" style={{ marginBlock: 20 }}>
						{card?.title}
					</Typography>
					{card?.paragraphs?.map((paragraph, index) => (
						<Typography
							key={index}
							style={{ marginBottom: 15 }}
							variant="body2">
							{paragraph}
						</Typography>
					))}
				</div>
			))}
		</div>
	)
}

export const aboutPageContent: {
	id?: string
	title: string
	paragraphs: string[]
}[] = [
	{
		id: "our-start",
		title: "OUR START",
		paragraphs: [
			`Established in 2014 by Mark "Mattis" Gisis from his apartment in Lakewood, New Jersey, iRepair4u started off with his first phone repair, an iPhone 4 he purchased from a friend for $80. Since then, he has fixed thousands of devices and has made many satisfied customers. Mark's honesty, friendly demeanor, and quality work gained a reputation, laying the foundation of what is the current iRepair4u.`,
			"We have expanded our business to meet the needs of our growing community, and our repair shop is now located in Jackson, New Jersey, just five minutes outside of Lakewood, New Jersey.",
		],
	},
	{
		id: "what-we-do",
		title: "WHAT WE DO",
		paragraphs: [
			"We offer a comprehensive range of services tailored to meet the needs of our valued customers. We specialize in iPhone and Samsung repairs, but we also service all popular smartphone makes and models, such as Motorola, LG, Google, and OnePlus. We also provide data recovery, entry-level logic board diagnostics, and soldering services.",
			`Recognizing the unique preferences of the Lakewood community, we are pleased to provide dedicated services for flip phones and other "dumb" phones.`,
			"We deliver solutions with precision and efficiency, ensuring your device receives the care and attention it deserves. For a full listing of our services and device coverage, check out our services page.",
		],
	},
	{
		id: "quality-and-affordability",
		title: "QUALITY AND AFFORDABILITY",
		paragraphs: [
			"Since our beginning, we have set customer service, affordability, and quality work as the cornerstone of our business. We pride ourselves in passing savings on to our customers without compromising on the quality of our work, all while providing a warm and welcoming environment.",
			"Our commitment to excellence has made us the top referral from local phone carrier stores, businesses, and customers.",
			"We are your one stop shop for all you mobile device needs and accessories. Looking forward to meeting you!",
		],
	},
]
