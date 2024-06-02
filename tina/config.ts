import { defineConfig } from "tinacms"

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
								name: "servicesSection",
								label: "Services Section",
								fields: [
									{
										name: "servicesSectionSegment",
										label: "Services Section Segment",
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
									{
										name: "coverageSection",
										label: "Coverage Section",
										type: "object",
										list: true,
										fields: [
											{
												name: "coverageSectionSegment",
												label: "Coverage Section Segment",
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
										type: "object",
										list: true,
										fields: [
											{
												name: "salesSectionSegment",
												label: "Sales Section Segment",
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
					{
						name: "contactLinks",
						label: "Contact Links",
						type: "object",
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
								description:
									"Please provide a link to a map service at your address.",
								name: "address",
								label: "Address",
								type: "string",
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
					{
						name: "hoursOfOperation",
						label: "Hours of Operation",
						type: "object",

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
})
