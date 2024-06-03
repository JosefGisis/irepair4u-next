import { Typography, Link } from "@mui/material"
import { colorTheme } from "../../../../styles/colorTheme"
import { tinaField } from "tinacms/dist/react"

export default function ContactInformation(props: {
	__typename: "ContactUsBlocksContactInfo"
	contactInfoCard?:
		| ({
				__typename: "ContactUsBlocksContactInfoContactInfoCard"
				title?: string | null | undefined
				linkType?: string | null | undefined
				link?: string | null | undefined
				paragraph?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	const { redAccent } = colorTheme
	return (
		<>
			{props.contactInfoCard?.map((card, index) => (
				<div
					data-tina-field={tinaField(props, "contactInfoCard")}
					key={index}
					style={{ width: "100%" }}>
					<Typography
						variant="h6"
						marginBottom="1rem"
						marginTop="1.5rem">
						{card?.title}{" "}
						<span
							style={{
								color: redAccent,
								textDecoration: "underline",
							}}>
							<Link
								href={`${card?.linkType === "email" ? "mailto:" : card?.linkType === "tel" ? "tel:+" : ""}${card?.link}`}>
								{card?.link}
							</Link>
						</span>
					</Typography>
					<Typography variant="body1" marginBottom="1rem">
						{card?.paragraph}
					</Typography>
				</div>
			))}
		</>
	)
}
