type ContactUsPageContentType = {
	title: string
	linkType: "tel" | "email" | "social" | "other"
	link: string
	paragraph: string
}[]
export const contactUsPageContent: ContactUsPageContentType = [
	{
		title: "Give us a call at",
		linkType: "tel",
		link: "7323303038",
		paragraph:
			"If you can't get through to us, please leave a voicemail or message with your name, phone number, and device specifications.",
	},
	{
		title: "or contact us via email at",
		linkType: "email",
		link: "irepairr4u@gmail.com",
		paragraph:
			"When emailing us, please provide the make and model of your device, as well as the issue or repair of your concern. You can find information about your device in settings/about. If you are still unsure, or cannot access your device’s settings, no problem, just send us whatever information you do have about your device. Also, please put your name as a comment, so we can contact you sooner and more effectively communicate.",
	},
]
