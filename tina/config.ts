import { defineConfig } from "tinacms"
import { socialMediaLinks } from "../app/(pages)/(footer)/components/ContactLinks"

export default defineConfig({
	branch: "",
	clientId: "",
	token: "",
	build: {
		publicFolder: "public",
		outputFolder: "admin",
	},
	media: {
		tina: {
			publicFolder: "public",
			mediaRoot: "/images",
		},
	},
	schema: {
		collections: [
			{
				name: "home",
				label: "Home",
				path: "content/home",
				format: "md",
				ui: { router: () => `/` },
				fields: [
					{ name: "title", label: "Title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [
							{
								name: "welcomeHero",
								label: "Welcome Hero",
								fields: [
									{
										name: "title",
										label: "Title",
										type: "string",
									},
									{
										name: "subtitle",
										label: "Subtitle",
										type: "string",
									},
									{
										name: "image",
										label: "Image",
										type: "image",
									},
								],
							},
							{
								name: "homePageAbout",
								label: "Home Page About",
								fields: [
									{
										name: "cards",
										label: "Card",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												name: "text",
												label: "Text",
												type: "string",
											},
											{
												name: "image",
												label: "Image",
												type: "image",
											},
										],
									},
								],
							},
							{
								name: "homePageServices",
								label: "Home Page Services",
								fields: [
									{
										name: "cards",
										label: "Cards",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												name: "text",
												label: "Text",
												type: "string",
											},
											{
												description:
													"The URL for the page that the link will point to.",
												name: "pageLink",
												label: "Page Link",
												type: "string",
												options: [
													"/",
													"/about",
													"/services",
													"/contact-us",
													"/faq",
												],
											},
											{
												description:
													"Add an ID from a block on the page to link to a specific section of the page. Refer to IDs from your created blocks. ID should be in the format of 'about-section-1' with dashes separating words.",
												name: "id",
												label: "ID",
												type: "string",
											},
											{
												name: "image",
												label: "Image",
												type: "image",
											},
										],
									},
								],
							},
							{
								name: "warrantyBanner",
								label: "Warranty Banner",
								fields: [
									{
										name: "title",
										label: "Title",
										type: "string",
									},
									{
										name: "paragraphs",
										label: "Paragraphs",
										type: "string",
										list: true,
									},
								],
							},
						],
					},
				],
			},
			{
				name: "about",
				label: "About",
				path: "content/about",
				format: "md",
				ui: { router: () => `/about` },
				fields: [
					{ name: "title", label: "Title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [
							{
								name: "aboutSegment",
								label: "About Segment",
								fields: [
									{
										name: "cards",
										label: "Card",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												description:
													"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
												name: "id",
												label: "ID",
												type: "string",
											},
											{
												name: "paragraphs",
												label: "Paragraphs",
												type: "string",
												list: true,
											},
										],
									},
								],
							},
							{
								name: "termsAndConditions",
								label: "Terms and Conditions",
								fields: [
									{
										name: "segments",
										label: "Segments",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												name: "clauses",
												label: "Clauses",
												type: "string",
												list: true,
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "services",
				label: "Services",
				path: "content/services",
				format: "md",
				ui: { router: () => `/services` },
				fields: [
					{ name: "title", label: "Title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [
							{
								name: "repairsSection",
								label: "Repairs Section",
								fields: [
									{
										name: "repairs",
										label: "Repairs",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												description:
													"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
												name: "id",
												label: "ID",
												type: "string",
											},
											{
												name: "paragraphs",
												label: "Paragraphs",
												type: "string",
												list: true,
											},
										],
									},
								],
							},
							{
								name: "coverageSection",
								label: "Coverage Section",
								fields: [
									{
										name: "coverage",
										label: "Coverage",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												description:
													"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
												name: "id",
												label: "ID",
												type: "string",
											},
											{
												name: "paragraphs",
												label: "Paragraphs",
												type: "string",
												list: true,
											},
										],
									},
								],
							},
							{
								name: "salesSection",
								label: "Sales Section",
								fields: [
									{
										name: "sales",
										label: "Sales",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												description:
													"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
												name: "id",
												label: "ID",
												type: "string",
											},
											{
												name: "paragraphs",
												label: "Paragraphs",
												type: "string",
												list: true,
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "faq",
				label: "FAQ",
				path: "content/faq",
				format: "md",
				ui: { router: () => `/faq` },
				fields: [
					{ name: "title", label: "Title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [
							{
								name: "questionAndAnswerSection",
								label: "Question and Answer Section",
								fields: [
									{
										name: "questionAndAnswer",
										label: "Question and Answer",
										type: "object",
										list: true,
										fields: [
											{
												name: "question",
												label: "Question",
												type: "string",
											},
											{
												name: "id",
												label: "ID",
												type: "string",
												description:
													"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
											},
											{
												name: "answer",
												label: "Answer",
												type: "string",
												list: true,
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "contactUs",
				label: "Contact Us",
				path: "content/contact-us",
				format: "md",
				ui: { router: () => `/contact-us` },
				fields: [
					{ name: "title", label: "Title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [
							{
								name: "contactUsBanner",
								label: "Contact Us Banner",
								fields: [
									{
										name: "title",
										label: "Title",
										type: "string",
									},
									{
										name: "subtitle",
										label: "Subtitle",
										type: "string",
									},
								],
							},
							{
								name: "contactInfo",
								label: "Contact Info",
								fields: [
									{
										name: "contactInfoCard",
										label: "Contact Info Card",
										type: "object",
										list: true,
										fields: [
											{
												name: "title",
												label: "Title",
												type: "string",
											},
											{
												name: "linkType",
												label: "Link Type",
												type: "string",
												options: [
													"tel",
													"email",
													"social",
													"other",
												],
											},
											{
												name: "link",
												label: "Link",
												type: "string",
											},
											{
												name: "paragraph",
												label: "Paragraph",
												type: "string",
											},
										],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "links",
				label: "Links",
				path: "content/links",
				format: "md",
				ui: {
					router: () => "/",
				},
				fields: [
					{ name: "title", label: "Title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						templates: [
							{
								name: "contactLinks",
								label: "Contact Links",
								fields: [
									{
										description:
											"Please provide a valid phone number.",
										name: "phoneNumber",
										label: "Phone Number",
										type: "string",
									},
									{
										description:
											"Please provide a valid email address.",
										name: "email",
										label: "Email",
										type: "string",
									},
									{
										name: "address",
										label: "Address",
										type: "object",
										fields: [
											{
												name: "address",
												label: "Address",
												type: "string",
											},
											{
												description:
													"Please provide a link to a map service at your address.",
												name: "link",
												label: "Link",
												type: "string",
											},
										],
									},
									{
										name: "socialLinks",
										label: "Social Links",
										type: "object",
										list: true,
										fields: [
											{
												description:
													"pick a social media platform. This will generate a corresponding icon.",
												name: "linkType",
												label: "Link Type",
												type: "string",
												options: socialMediaLinks,
											},
											{
												description:
													"Please provide a valid link to your social media account",
												name: "link",
												label: "Link",
												type: "string",
											},
										],
									},
								],
							},
							{
								name: "informationLinks",
								label: "Information Links",
								fields: [
									{
										name: "list",
										label: "List",
										type: "object",
										list: true,
										fields: [
											{
												description:
													"The text that will be displayed for the link. Try to pick something that is descriptive and concise.",
												name: "label",
												label: "Label",
												type: "string",
											},
											{
												description: "Information links can contain external links to other websites. If provided pageLink and id are ignored for the full link provided here.",
												name: "externalLink",
												label: "External Link",
												type: "string",
											},
											{
												description:
													"The URL for the page that the link will point to.",
												name: "pageLink",
												label: "Page Link",
												type: "string",
												options: [
													"/",
													"/about",
													"/services",
													"/contact-us",
													"/faq",
												],
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
								],
							},
							{
								name: "servicesLinks",
								label: "Services Links",
								fields: [
									{
										name: "list",
										label: "List",
										type: "object",
										list: true,
										fields: [
											{
												description:
													"The text that will be displayed for the link. Try to pick something that is descriptive and concise.",
												name: "label",
												label: "Label",
												type: "string",
											},
											{
												description:
													"The URL for the page that the link will point to.",
												name: "pageLink",
												label: "Page Link",
												type: "string",
												options: [
													"/",
													"/about",
													"/services",
													"/contact-us",
													"/faq",
												],
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
								],
							},
							{
								name: "coverageLinks",
								label: "Coverage Links",
								fields: [
									{
										name: "list",
										label: "List",
										type: "object",
										list: true,
										fields: [
											{
												description:
													"The text that will be displayed for the link. Try to pick something that is descriptive and concise.",
												name: "label",
												label: "Label",
												type: "string",
											},
											{
												description:
													"The URL for the page that the link will point to.",
												name: "pageLink",
												label: "Page Link",
												type: "string",
												options: [
													"/",
													"/about",
													"/services",
													"/contact-us",
													"/faq",
												],
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
								],
							},
							{
								name: "hoursOfOperation",
								label: "Hours of Operation",
								fields: [
									{
										name: "days",
										label: "Days",
										type: "object",
										list: true,
										fields: [
											{
												name: "day",
												label: "Day",
												type: "string",
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
												type: "string",
											},
										],
									},
								],
							},
						],
					},
				],
			},
		],
	},
})
