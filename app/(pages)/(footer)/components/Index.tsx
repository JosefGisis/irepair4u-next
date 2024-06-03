import { useTina } from "tinacms/dist/react"
import type { LinksQuery, Exact } from "../../../../tina/__generated__/types"
import ContactLinks from "./ContactLinks"
import Hours from "./Hours"
import FooterLogo from "./FooterLogo"
import { ServicesLinks, InformationLinks } from "./Links"

export default function FooterComponents(props: {
	data: LinksQuery
	errors?:
		| {
				message: string
				locations: {
					line: number
					column: number
				}[]
				path: string[]
		  }[]
		| undefined
	variables: Exact<{
		relativePath: string
	}>
	query: string
}) {
	const { data } = useTina(props)
	return (
		<div>
			<div
				id="business-links"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: 15,
				}}>
				<FooterLogo />
				{data?.links?.blocks?.map((block, index) => {
					switch (block?.__typename) {
						case "LinksBlocksContactLinks":
							return <ContactLinks key={index} {...block} />
						case "LinksBlocksHoursOfOperation":
							return <Hours key={index} {...block} />
						default:
							return null
					}
				})}
			</div>
			{data?.links?.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "LinksBlocksInformationLinks":
						return <InformationLinks key={index} {...block} />
					case "LinksBlocksServicesLinks":
						return <ServicesLinks key={index} {...block} />
					case "LinksBlocksCoverageLinks":
						return <ServicesLinks key={index} {...block} />
					default:
						return null
				}
			})}
		</div>
	)
}
