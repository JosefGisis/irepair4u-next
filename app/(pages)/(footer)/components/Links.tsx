import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { tinaField } from "tinacms/dist/react"

export function ServicesLinks(
	props:
		| {
				__typename: "HomeBlocksServicesLinks"
				list?:
					| ({
							__typename: "HomeBlocksServicesLinksList"
							label?: string | null | undefined
							pageLink?: string | null | undefined
							id?: string | null | undefined
					  } | null)[]
					| null
					| undefined
		  }
		| {
				__typename: "HomeBlocksCoverageLinks"
				list?:
					| ({
							__typename: "HomeBlocksCoverageLinksList"
							label?: string | null | undefined
							pageLink?: string | null | undefined
							id?: string | null | undefined
					  } | null)[]
					| null
					| undefined
		  }
) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "18px",
				alignItems: { xs: "center", md: "start" },
			}}>
			<Typography variant="h6">
				{props.__typename === "HomeBlocksServicesLinks"
					? "Service Links"
					: "Coverage Links"}
			</Typography>

			{props.list?.length && (
				<div data-tina-field={tinaField(props)}>
					{props.list?.map((link, index) => (
						<Link
							key={index}
							href={`${link?.pageLink}#${link?.id}`}>
							<Typography
								variant="body2"
								className="footer-link"
								width="fit-content"
								style={{ textWrap: "nowrap" }}>
								{link?.label}
							</Typography>
						</Link>
					))}
				</div>
			)}
		</Box>
	)
}

export function InformationLinks(props: {
	__typename: "HomeBlocksInformationLinks"
	list?:
		| ({
				__typename: "HomeBlocksInformationLinksList"
				label?: string | null | undefined
				externalLink?: string | null | undefined
				pageLink?: string | null | undefined
				id?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "18px",
				alignItems: { xs: "center", md: "start" },
			}}>
			<Typography variant="h6">Information Links</Typography>

			{props.list?.length && (
				<div data-tina-field={tinaField(props)}>
					{props.list?.map((link, index) => (
						<Link
							key={index}
							href={
								link?.externalLink
									? link.externalLink
									: `${link?.pageLink}#${link?.id}`
							}>
							<Typography
								variant="body2"
								className="footer-link"
								width="fit-content"
								style={{ textWrap: "nowrap" }}>
								{link?.label}
							</Typography>
						</Link>
					))}
				</div>
			)}
		</Box>
	)
}
