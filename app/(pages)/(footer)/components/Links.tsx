import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { tinaField } from "tinacms/dist/react"

export function ServicesLinks(
	props:
		| {
				__typename: "LinksBlocksServicesLinks"
				list?:
					| ({
							__typename: "LinksBlocksServicesLinksList"
							label?: string | null | undefined
							pageLink?: string | null | undefined
							id?: string | null | undefined
					  } | null)[]
					| null
					| undefined
		  }
		| {
				__typename: "LinksBlocksCoverageLinks"
				list?:
					| ({
							__typename: "LinksBlocksCoverageLinksList"
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
				{props.__typename === "LinksBlocksServicesLinks"
					? "Services"
					: "Coverage"}
			</Typography>

			{props.list?.length && (
				<div data-tina-field={tinaField(props, "list")}>
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
	__typename: "LinksBlocksInformationLinks"
	list?:
		| ({
				__typename: "LinksBlocksInformationLinksList"
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
				<div data-tina-field={tinaField(props, "list")}>
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
