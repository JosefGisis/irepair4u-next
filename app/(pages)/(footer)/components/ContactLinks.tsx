import PlaceIcon from "@mui/icons-material/Place"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import Facebook from "@mui/icons-material/Facebook"
import Twitter from "@mui/icons-material/Twitter"
import Instagram from "@mui/icons-material/Instagram"
import WhatsApp from "@mui/icons-material/WhatsApp"
import Telegram from "@mui/icons-material/Telegram"
import LinkedIn from "@mui/icons-material/LinkedIn"
import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export const socialMediaLinks = [
	"facebook",
	"twitter",
	"instagram",
	"whatsapp",
	"telegram",
	"linkedin",
]

const socialMediaIcons = {
	facebook: Facebook,
	twitter: Twitter,
	instagram: Instagram,
	whatsapp: WhatsApp,
	telegram: Telegram,
	linkedin: LinkedIn,
}

export default function ContactLinks(props: {
	__typename: "LinksBlocksContactLinks"
	phoneNumber?: string | null | undefined
	email?: string | null | undefined
	address?:
		| {
				__typename: "LinksBlocksContactLinksAddress"
				address?: string | null | undefined
				link?: string | null | undefined
		  }
		| null
		| undefined
	socialLinks?:
		| ({
				__typename: "LinksBlocksContactLinksSocialLinks"
				linkType?: string | null | undefined
				link?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<div>
			{props.phoneNumber && (
				<div
					data-tina-field={tinaField(props, "phoneNumber")}
					style={{ display: "flex", gap: 10 }}>
					<LocalPhoneIcon />
					<Typography id="phone" className="footer-link">
						<a href={`tel:${props.phoneNumber}` || ""}>
							{props.phoneNumber}
						</a>
					</Typography>
				</div>
			)}

			{props.email && (
				<div
					data-tina-field={tinaField(props, "email")}
					style={{ display: "flex", gap: 10 }}>
					<EmailIcon />
					<Typography id="email" className="footer-link">
						<a
							className="footer-link"
							href={`mailto:${props.email}` || ""}>
							{props.email}
						</a>
					</Typography>
				</div>
			)}

			{props.address && (
				<div
					data-tina-field={tinaField(props, "address")}
					style={{ display: "flex", gap: 10 }}>
					<PlaceIcon />
					<Typography id="address">
						<a
							className="footer-link"
							href={props.address?.link || ""}>
							{props.address?.address}
						</a>
					</Typography>
				</div>
			)}

			{props.socialLinks?.length && (
				<div data-tina-field={tinaField(props, "socialLinks")}>
					{props.socialLinks?.map((link, index) => {
						return (
							<div
								key={index}
								style={{ display: "flex", gap: 10 }}>
								{Object.entries(socialMediaIcons).find(
									([key, Icon]) => {
										if (
											link?.linkType?.toLowerCase() ===
											key
										) {
											return Icon
										}
									}
								)}
								<Typography
									id={link?.linkType?.toLowerCase()}
									className="footer-link">
									<a
										className="footer-link"
										href={link?.link || ""}>
										{link?.linkType}
									</a>
								</Typography>
							</div>
						)
					})}
				</div>
			)}
		</div>
	)
}
