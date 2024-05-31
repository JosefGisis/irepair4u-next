export const faqPageBlocks = [
	{
		name: "questionAndAnswer",
		label: "Question and Answer",
		type: "object",
        list: true,
        required: true,
		fields: [
            {
                name: "question",
                label: "Question",
                type: "string",
                required: true,
            },
            {
                name: "id",
                label: "ID",
                type: "string",
                description: "Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.

            },
            {
                name: "answer",
                label: "Answer",
                type: "string",
                list: true,
                required: true,
            }
		],
	},
]
