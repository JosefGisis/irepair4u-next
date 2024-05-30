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
				name: "page",
				label: "Page",
				path: "content/pages",
				format: "md",
				fields: [
					{ name: "title", type: "string" },
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
										required: true,
									},
									{
										name: "subtitle",
										label: "Subtitle",
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
								name: "links",
								label: "Links",
								type: "object",
								list: true,
								fields: [
									{ name: "link", type: "string" },
									{ name: "label", type: "string" },
									{
										name: "style",
										type: "string",
										options: ["primary", "secondary"],
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
