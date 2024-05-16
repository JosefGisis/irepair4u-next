import { defineConfig } from "tinacms"

export default defineConfig({
	branch: "",
	clientId: "",
	token: "",
	build: {
		publicFolder: "public",
		outputFolder: "admin",
	},
	schema: {
		collections: [
			{
				name: "page",
				label: "Page",
				path: "content/pages",
				format: "md",
				fields: [{ name: "title", type: "string" }],
			},
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
                            { name: "message", type: "rich-text" },
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
                            { name: "style", type: "string", options: ["primary", "secondary"]}
                        ],


                    }
				],
			},
		],
	},
})
