export const aboutPageBlocks = [
	{
		name: "aboutSegment",
		label: "About Segment",
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
				description:
					"Add an id so you can link to this section of the page elsewhere.",
				name: "id",
				label: "ID",
				type: "string",
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
	{
		name: "termsAndConditionsSegment",
		label: "Terms and Conditions Segment",
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
				name: "clauses",
				label: "Clauses",
				type: "string",
				list: true,
				required: true,
			},
		],
	},
]
