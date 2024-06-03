'use client'

import { useTina } from "tinacms/dist/react"
import type { FaqQuery, Exact } from "../../../../tina/__generated__/types"
import FAQSection from "./FAQSection"

export default function FAQComponents(props: {
	data: FaqQuery
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
			{data?.faq?.blocks?.map((block, index) => {
				switch (block?.__typename) {
					case "FaqBlocksQuestionAndAnswerSection":
						return <FAQSection key={index} {...block} />
					default:
						return null
				}
			})}
		</div>
	)
}
