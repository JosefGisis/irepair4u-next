import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function ContactUsBanner(props: {
	__typename: "ContactUsBlocksContactUsBanner"
	title?: string | null | undefined
	subtitle?: string | null | undefined
}) {
	return (
		<>
			<Typography
				data-tina-field={tinaField(props, "title")}
				textAlign="center"
				variant="h3"
				marginTop="3rem"
				marginBottom="1.8rem">
				{props.title}
			</Typography>
			<Typography
				data-tina-field={tinaField(props, "subtitle")}
				textAlign="center"
				variant="h6"
				marginBottom="2rem">
				{props.subtitle}
			</Typography>
		</>
	)
}
