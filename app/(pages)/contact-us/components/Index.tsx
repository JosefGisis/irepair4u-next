'use client'

import { useTina } from "tinacms/dist/react"
import { ContactUsQuery, Exact } from "../../../../tina/__generated__/types"
import ContactUsBanner from "./ContactUsBanner"
import ContactInformation from "./ContactInformation"

export default function ContactUsComponents(props: {
	data: ContactUsQuery
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
			{data?.contactUs?.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "ContactUsBlocksContactUsBanner":
						return <ContactUsBanner key={index} {...block} />
					case "ContactUsBlocksContactInfo":
						return <ContactInformation key={index} {...block} />
					default:
						return null
				}
			})}
		</div>
	)
}
