export const contactUsPageBlocks = [
	{
		name: "contactUsBanner",
		label: "Contact Us Banner",
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
		],
	},
	{
		name: "contactInfo",
		label: "Contact Info",
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
				name: "linkType",
				label: "Link Type",
                type: "string",
				required: true,
                options: ["tel", "email", "social", "other"]
			},
			{
				name: "link",
				label: "Link",
				type: "string",
				required: true,
			},
			{
				name: "paragraph",
				label: "Paragraph",
				type: "string",
				required: true,
			},
		],
	},
]
