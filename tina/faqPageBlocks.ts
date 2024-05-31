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
                name: "answer",
                label: "Answer",
                type: "string",
                list: true,
                required: true,
            }
		],
	},
]
