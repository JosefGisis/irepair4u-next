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

export default function ContactLinks(props: {
	__typename: "HomeBlocksContactLinks"
	phoneNumber?: string | null | undefined
	email?: string | null | undefined
	address?:
		| {
				__typename: "HomeBlocksContactLinksAddress"
				address?: string | null | undefined
				link?: string | null | undefined
		  }
		| null
		| undefined
	socialLinks?:
		| ({
				__typename: "HomeBlocksContactLinksSocialLinks"
				linkType?: string | null | undefined
				link?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	const socialMediaIcons = {
		facebook: <Facebook style={{ width: 35, height: 35 }} />,
		twitter: <Twitter style={{ width: 35, height: 35 }} />,
		instagram: <Instagram style={{ width: 35, height: 35 }} />,
		whatsapp: <WhatsApp style={{ width: 35, height: 35 }} />,
		telegram: <Telegram style={{ width: 35, height: 35 }} />,
		linkedin: <LinkedIn style={{ width: 35, height: 35 }} />,
	}
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 15,
			}}>
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
				<div
					style={{ display: "flex", gap: 15 }}
					data-tina-field={tinaField(props)}>
					{props.socialLinks?.map((link, index) => {
						return (
							<Typography key={index} className="footer-link">
								<a href={link?.link || ""}>
									{
										socialMediaIcons[
											link?.linkType?.toLowerCase() as keyof typeof socialMediaIcons
										]
									}
								</a>
							</Typography>
						)
					})}
				</div>
			)}
		</div>
	)
}
