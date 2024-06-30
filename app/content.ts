/**
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Home page content
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
export const welcomeHeroContent: {
	id?: string
	title: string
	url: string
	subtitle: string
} = {
	id: "welcome-hero",
	title: "IPHONE, IPAD, AND MORE",
	url: "images/imac-940x474.png",
	subtitle:
		"iRepair4U has been serving Lakewood, Jackson and neighboring communities for over 9 years. We provide fast, professional, and courteous services at affordable prices. Give us a call so we may assist you!",
}

export const homePageAboutContent: {
	id?: string
	title: string
	url: string
	text: string
}[] = [
	{
		id: "our-story",
		title: "OUR STORY",
		url: "images/about-us-3-2-460x307.jpg",
		text: "iRepair4U started fixing phones in 2016 in Lakewood, NJ, and soon gained a reputation for its quality work and friendly service. Since then, our business has grown and our workshop is now located in beautiful Jackson, New Jersey, right off Clearstream road, only five minutes out of akewood.",
	},
	{
		id: "home-page-coverage",
		title: "COVERAGE",
		url: "images/coverage1-3-2-460x307.jpg",
		text: "We offer a broad range of services for a wide variety of devices. We repair all popular makes and models, such as Apple, Samsung, LG, Google, OnePlus, Motorola, and more. We would love to work with you, so if you don't see a device or service you need, please give us call!",
	},
	{
		id: "customer-service",
		title: "CUSTOMER SERVICE",
		url: "images/trust-us1-3-2-460x307.jpg",
		text: "Since our start, we have set customer service, affordability, and quality work as the cornerstone of our business. We pride ourselves in passing savings on to our customers without compromising on the quality of our work and all while providing a warm and welcoming environment.",
	},
]

export const homePageServicesContent: {
	id?: string
	title: string
	url: string
	href: string
	text: string
}[] = [
	{
		id: "home-page-screen-replacement",
		title: "SCREEN REPLACEMENT",
		url: "images/age-barros-fKAjOxgZNPg-unsplash.jpg",
		href: "/services",
		text: "Phone screen broken or cracked? No worries! Screen repairs are our specialty. We will have your phone looking and working like new in no time.",
	},
	{
		id: "home-page-water-damage",
		title: "WATER DAMAGE",
		url: "images/iphone-1067991_640.jpg",
		href: "/faq#faq-water-damage",
		text: "Accidents happen. Bring us your water damaged phone so we may assist you. In the meantime, click on this card to see what you can do to increase your phone's chance of surviving.",
	},
	{
		id: "home-page-battery-replacement",
		title: "BATTERY REPLACEMENT",
		url: "images/tyler-lastovich-rAtzDB6hWrU-unsplash.jpg",
		href: "/services",
		text: "If your phone won't charge or your battery is draining too quickly, we offer fast and affordable battery replacements and charging port repairs.",
	},
	{
		id: "home-page-data-recovery",
		title: "DATA RECOVERY",
		url: "images/benjamin-lehman-GNyjCePVRs8-unsplash.jpg",
		href: "/services",
		text: "Need to save precious data? We can help you recover and preserve all your invaluable photos, videos, messages, and other media from your device.",
	},
	{
		id: "home-page-accessories",
		title: "ACCESSORIES",
		url: "images/lucas-hoang-0_S1K3u6Cmc-unsplash.jpg",
		href: "/services",
		text: "We offer accessories for your mobile devices, such as screen protectors, chargers, car mounts, and more. We also have cases for most popular smartphone makes and models.",
	},
	{
		id: "home-page-speaker-repair",
		title: "SPEAKER REPAIR",
		url: "images/apple-1284223_640.jpg",
		href: "/services",
		text: "Having a hard time hearing others during your calls? Speakers can go weak over time. We can improve the quality of your microphone and speaker.",
	},
]

export const warrantyBannerContent: {
	id?: string
	title: string
	paragraphs: string[]
} = {
	id: "warranty-banner",
	title: "Free 90-Day Warranty",
	paragraphs: [
		"All our phone repair services are backed by our free 90-day warranty. We guarantee the quality of our work. If you encounter issue connected to the repair we conducted, we've got you covered. See our terms-and-conditions for more information on our warranty.",
	],
}

/**
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 * About page content
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
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

export const termsAndConditionsContent: {
	id?: string
	title: string
	clauses: string[]
}[] = [
	{
		title: "Service Agreement",
		clauses: [
			"The customer agrees to the terms and conditions outlined herein upon availing of phone repair services from iRepair4U LLC.",
			"iRepair4U LLC will provide repair services as described in the service request.",
			"iRepair4U LLC will assess the device and inform the customer of the repair options and costs.",
		],
	},
	{
		title: "Cost and Payment",
		clauses: [
			"Repair costs include parts, labor, and any additional services agreed upon.",
			"Payment is due upon completion of the repair.",
			"iRepair4U LLC reserves the right to withhold the repaired device until full payment is received.",
		],
	},
	{
		title: "Warranty",
		clauses: [
			"All repairs are covered by a free 90-day warranty against defects in workmanship and materials.",
			"This warranty only covers failures or defects in workmanship and materials directly related to the repair or service performed. Unrelated issues are subject to full repair fees and costs.",
			"The 90 day warranty starts on the first day the customer receives the repaired device. All Repairs following the warranty period are subject to full repair fees and costs.",
			"This warranty does not cover damage resulting from mishandling or unauthorized modifications.",
		],
	},
	{
		title: "Phone Sales",
		clauses: [
			"All sales of phones refurbished by iRepair4u are covered by a free 90-day warranty.",
			"The customer is entitled to a full refund or replacement if the refurbished device stops working within the 90-day warranty period and iRepair4U LLC can not repair it.",
			"This warranty does not cover damage resulting from mishandling or unauthorized modifications to the device.",
			"iRepair4u LLC reserves the right to subtract refund total to cover damages to salvageable device parts resulting from mishandling or unauthorized modifications to the device.",
		],
	},
	{
		title: "Customer Responsibilities",
		clauses: [
			"Customers are responsible for backing up their data before submitting devices for repair.",
			"iRepair4U LLC is not liable for any loss of data during the repair process.",
		],
	},
	{
		title: "Turnaround Time",
		clauses: [
			"iRepair4U LLC will make reasonable efforts to complete repairs in a timely manner.",
			"Delays may occur due to unforeseen circumstances, and iRepair4U LLC will communicate any changes in the estimated completion time.",
		],
	},
	{
		title: "Failure to Successfully Recover Device/Data",
		clauses: [
			"iRepair4U LLC reserves the right to charge labor costs for services rendered even if the device cannot be successfully repaired (or the data cannot be recovered) depending on the nature of the repair. Such repairs include water damage recovery, severely damaged devices, and other services where the outcome or likelihood of successful repair is uncertain.",
		],
	},
	{
		title: "Liability",
		clauses: [
			"iRepair4U LLC is not liable for any indirect, consequential, or incidental damages.",
			"The total liability of iRepair4U LLC shall not exceed the total amount of the device submitted for repair. Irepiar4u LLC is not liable for any loss of data during the repair process (see Customer Responsibilities).",
		],
	},
	{
		title: "By availing of our phone repair services, the customer acknowledges and agrees to these terms and conditions.",
		clauses: [],
	},
]

/**
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Services page content
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
export const servicesTextContent: {
	section: string
	id: string
	services: { service: string; description: string; id: string }[]
}[] = [
	{
		section: "Repair Services",
		id: "repair-services-tag",
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
		id: "coverage-tag",
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
		id: "sales-tag",
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

/**
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 * FAQ page content
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
export const faqTextContent: {
	id?: string
	q: string
	a: string
}[] = [
	{
		id: "faq-water-damage",
		q: "My phone fell into water. Should I put it in rice?",
		a: `Save your rice for cooking. Rice not only does not help, but it can also cause more damage by making your charging port dirty. When your phone falls into water you need to bring it to a phone repair shop as soon as possible, so they can open it and dry it out. However, you can improve your phone's chances of surviving by not pressing any buttons (so as to avoid short-circuiting your device) and just submerging it in rubbing alcohol (70% alcohol, plus). This may seem counterintuitive, but it is not the water itself that causes your phone to short circuit; rather, it is the minerals found in water (something rubbing alcohol does not have). The rubbing alcohol may save your phone while you are waiting to bring it to a repair shop.`,
	},
	{
		id: "faq-flip-phones",
		q: "Do you fix flip phones?",
		a: "Yes we fix most flip phones. Give us a call, so we can provide more information about our services.",
	},
	{
		id: "faq-original-parts",
		q: "Are your replacement parts original?",
		a: "Unless we can salvage a part from another phone, all parts are aftermarket (made by third-party manufacturers). This is the case because top phone and tablet manufacturers do not sell original parts for their products.",
	},
	{
		id: "faq-warranty",
		q: "Which repairs are covered by your 90 day warranty?",
		a: "All repairs! We stand behind our work. So if something we fixed stops working, bring it back to us and we'll make it right.",
	},
	{
		id: "faq-warranty-voided",
		q: "You recently fixed my cracked screen, but now my speaker is no longer working. Is that covered by your warranty?",
		a: "Sorry. No. Unless the speaker has stopped working due to the repair we conducted. The same goes for any damages not related to our work.",
	},
	{
		id: "faq-attempted-repair",
		q: "What happens if iRepair4U cannot save my damaged phone? Do I still need to pay for the attempt?",
		a: "Depends. With some repairs, such as screen repairs, battery replacements,speaker repairs, etc., we will not charge you if we cannot fix your device. However, when it comes to water damage repairs, it is uncertain if the phone can be recovered and oftentimes there is nothing we can do to save the device. With those kinds of services we may still charge for labor.",
	},
	{
		id: "faq-appointment",
		q: "Can I bring my phone over any time during business hours?",
		a: "You can, but we would recommend calling us first, so we can make time for you and provide more information about your repair. We also may not cover your device or have the necessary parts in stock at the moment, so we suggest giving us a call beforehand.",
	},
	{
		id: "faq-repair-prices",
		q: "Do you list repair prices?",
		a: "Unfortunately, no. Prices may vary depending on fluctuating prices for parts. Give us a call, so we can give you a quote!",
	},
]

/**
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Contact-us page content
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
export const contactUsPageContent: {
	id?: string
	title: string
	linkType: "tel" | "email" | "social" | "other"
	link: string
	text: string
}[] = [
	{
		title: "Give us a call at",
		linkType: "tel",
		link: "7323303038",
		text: "If you can't get through to us, please leave a voicemail or message with your name, phone number, and device specifications.",
	},
	{
		title: "or contact us via email at",
		linkType: "email",
		link: "irepairr4u@gmail.com",
		text: "When emailing us, please provide the make and model of your device, as well as the issue or repair of your concern. You can find information about your device in settings/about. If you are still unsure, or cannot access your device’s settings, no problem, just send us whatever information you do have about your device. Also, please put your name as a comment, so we can contact you sooner and more effectively communicate.",
	},
]

/**
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 * Footer links
 * ********************************************************************************************************************************************************************************************************************************************************************************************************************************
 */
export const hoursContent: {
	id?: string
	hours: { day: string; hours: string }[]
} = {
	id: "hours-of-operation",
	hours: [
		{ day: "Sun - Thu", hours: "11:00am - 5:00pm" },
		{ day: "Friday", hours: "11:00am - 2:00pm" },
		{ day: "Saturday", hours: "closed" },
	],
}

export const footerLinksContent: {
	id?: string
	title: string
	links: { name: string; link: string }[]
}[] = [
	{
		id: "information-links",
		title: "Information Links",
		links: [
			{ name: "About", link: "/about" },
			{
				name: "Terms and Conditions",
				link: "/about#terms-and-conditions",
			},
			{ name: "FAQ", link: "/faq" },
			{ name: "Services", link: "/services" },
			{ name: "Accessories", link: "/services#accessories-sales-tag" },
			{ name: "Phone Sales", link: "/services#phone-sales-tag" },
			{ name: "Site Documentation", link: "/README" },
		],
	},
	{
		id: "services-links",
		title: "Services Links",
		links: [
			{ name: "Screen Repair", link: "/services#repair-services-tag" },
			{
				name: "Battery Replacement",
				link: "/services#repair-services-tag",
			},
			{ name: "Water Damage", link: "/services#repair-services-tag" },
			{ name: "Button Repair", link: "/services#repair-services-tag" },
			{ name: "Camera Repair", link: "/services#repair-services-tag" },
			{ name: "Speaker Repair", link: "/services#repair-services-tag" },
			{ name: "Data Recovery", link: "/services#repair-services-tag" },
			{ name: "Board Repair", link: "/services#repair-services-tag" },
		],
	},
	{
		id: "coverage-links",
		title: "Coverage Links",
		links: [
			{ name: "iPhone", link: "/services#iphone-tag" },
			{ name: "Samsung", link: "/services#samsung-tag" },
			{ name: "Smartphone", link: "/services#smartphone-tag" },
			{ name: "Flip Phone", link: "/services#flipphone-tag" },
			{ name: "Tablet", link: "/services#tablet-tag" },
			{ name: "Computer", link: "/services#computer-tag" },
		],
	},
]
