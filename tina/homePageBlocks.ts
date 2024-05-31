export const homePageBlocks = [
	{
		name: "welcomeHero",
		label: "Welcome Hero",
		type: "object",
		required: true,
		fields: [
			{
				name: "title",
				label: "Title",
				type: "string",
				required: true,
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
		type: "object",
		list: true,
		required: true,
		fields: [
			{
				name: "title",
				label: "Title",
				type: "string",
				required: true,
			},
			{
				name: "text",
				label: "Text",
				type: "string",
				required: true,
			},
			{
				name: "image",
				label: "Image",
				type: "image",
				required: true,
			},
		],
	},
	{
		name: "homePageServices",
		label: "Home Page Services",
		type: "object",
		list: true,
		fields: [
			{
				name: "title",
				label: "Title",
				type: "string",
				required: true,
			},
			{
				name: "text",
				label: "Text",
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
			{
				name: "image",
				label: "Image",
				type: "image",
				required: true,
			},
		],
	},
	{
		name: "warrantyBanner",
		label: "Warranty Banner",
		type: "object",
		required: true,
		fields: [
			{
				name: "title",
				label: "Title",
				type: "string",
				required: true,
			},
			{
				name: "paragraphs",
				label: "Paragraphs",
				type: "string",
				list: true,
				required: true,
			},
		],
	},
]
