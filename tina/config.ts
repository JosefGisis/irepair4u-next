import { defineConfig } from "tinacms"
import { homePageBlocks } from "./homePageBlocks"
import { aboutPageBlocks } from "./aboutPageBlocks"
import { servicesPageBlocks } from "./servicesPageBlocks"
import { contactUsPageBlocks } from "./contactUsPageBlocks"
import { faqPageBlocks } from "./faqPageBlocks"
import { linkFields } from "./linkFields"

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
				ui: {
					router: (props) => {
						switch (props.document._sys.relativePath) {
							case "Home.md":
								return "/"
							case "About.md":
								return "/about"
							case "Services.md":
								return "/services"
							case "Contact_Us.md":
								return "/contact-us"
							case "FAQ.md":
								return "/faq"
							default:
								return "/404"
						}
					},
				},
				fields: [
					{ name: "title", type: "string" },
					{
						name: "blocks",
						label: "Blocks",
						type: "object",
						list: true,
						// @ts-ignore
						fields: [
							...homePageBlocks,
							...aboutPageBlocks,
							...servicesPageBlocks,
							...contactUsPageBlocks,
							...faqPageBlocks,
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
				// @ts-ignore
				fields: [
					...linkFields
					
				],
			},
		],
	},
})
