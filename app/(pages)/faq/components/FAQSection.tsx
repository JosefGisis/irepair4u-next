import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function FAQSection(props: {
	__typename: "FaqBlocksQuestionAndAnswerSection"
	questionAndAnswer?:
		| ({
				__typename: "FaqBlocksQuestionAndAnswerSectionQuestionAndAnswer"
				question?: string | null | undefined
				id?: string | null | undefined
				answer?: (string | null)[] | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBottom: "3rem",
			}}>
			{props.questionAndAnswer?.map((item, index) => (
				<div key={index} data-tina-field={tinaField(props)} id={item?.id || ""} style={{ width: "100%" }}>
					<Typography
						variant="subtitle1"
						marginBottom="1rem"
						marginTop="1.5rem">
						Q. {item?.question}
					</Typography>
					<Typography marginBottom="1rem" variant="body2">
						{item?.answer}
					</Typography>
				</div>
			))}
		</div>
	)
}
