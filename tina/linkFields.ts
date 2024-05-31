export const linkFields = [
	{
		name: "contactLinks",
		label: "Contact Links",
		type: "object",
		required: true,
		fields: [
			{
				description: "Please provide a valid phone number.",
				name: "phoneNumber",
				label: "Phone Number",
				type: "string",
				required: true,
			},
			{
				description: "Please provide a valid email address.",
				name: "email",
				label: "Email",
				type: "string",
				required: true,
			},
			{
				description:
					"Please provide a link to a map service at your address.",
				name: "address",
				label: "Address",
				type: "string",
				required: true,
			},
			{
				description:
					"Please provide a valid link to your social media account",
				name: "socialLinks",
				label: "Social Links",
				type: "string",
				list: true,
				options: [
					"facebook",
					"twitter",
					"instagram",
					"snapchat",
					"whatsapp",
					"telegram",
					"linkedin",
					"instagram",
				],
			},
		],
	},
	{
		name: "informationLinks",
		label: "Information Links",
		type: "object",
		list: true,
		required: true,
		fields: [
			{
				description:
					"The text that will be displayed for the link. Try to pick something that is descriptive and concise.",
				name: "label",
				label: "Label",
				type: "string",
				required: true,
			},
			{
				description:
					"The URL for the page that the link will point to.",
				name: "pageLink",
				label: "Page Link",
				type: "string",
				options: ["/", "/about", "/services", "/contact-us", "/faq"],
				required: true,
			},
			{
				description:
					"Add an ID from a block on the page to link to a specific section of the page. Refer to IDs from your created blocks. ID should be in the format of 'about-section-1' with dashes separating words.",
				name: "id",
				label: "ID",
				type: "string",
			},
		],
	},
	{
		name: "servicesLinks",
		label: "Services Links",
		type: "object",
		list: true,
		fields: [
			{
				description:
					"The text that will be displayed for the link. Try to pick something that is descriptive and concise.",
				name: "label",
				label: "Label",
				type: "string",
				required: true,
			},
			{
				description:
					"The URL for the page that the link will point to.",
				name: "pageLink",
				label: "Page Link",
				type: "string",
				options: ["/", "/about", "/services", "/contact-us", "/faq"],
				required: true,
			},
			{
				description:
					"Add an ID from a block on the page to link to a specific section of the page. Refer to IDs from your created blocks. ID should be in the format of 'about-section-1' with dashes separating words.",
				name: "id",
				label: "ID",
				type: "string",
			},
		],
	},
	{
		name: "coverageLinks",
		label: "Coverage Links",
		type: "object",
		list: true,
		fields: [
			{
				description:
					"The text that will be displayed for the link. Try to pick something that is descriptive and concise.",
				name: "label",
				label: "Label",
				type: "string",
				required: true,
			},
			{
				description:
					"The URL for the page that the link will point to.",
				name: "pageLink",
				label: "Page Link",
				type: "string",
				options: ["/", "/about", "/services", "/contact-us", "/faq"],
				required: true,
			},
			{
				description:
					"Add an ID from a block on the page to link to a specific section of the page. Refer to IDs from your created blocks. ID should be in the format of 'about-section-1' with dashes separating words.",
				name: "id",
				label: "ID",
				type: "string",
			},
		],
	},
	{
		name: "hoursOfOperation",
		label: "Hours of Operation",
		type: "object",
		required: true,
		fields: [
			{
				name: "day",
				label: "Day",
				type: "string",
				required: true,
				options: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
					"Sun - Thur",
					"Mon - Thur",
				],
			},
			{
				name: "hours",
				label: "Hours",
				required: true,
				type: "string",
			},
		],
	},
]
