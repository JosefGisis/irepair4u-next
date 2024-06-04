"use client"

import React from "react"
import { Survey } from "survey-react-ui"
import { Model } from "survey-core"
import { ThreeDimensionalLight } from "survey-core/themes/three-dimensional-light"

export default function SurveyForm() {
	const surveyJson = {
		title: "Contact Us",
		description:
			"Request a free quote or reach out with any questions or comments",
		logoPosition: "right",
		pages: [
			{
				name: "page1",
				elements: [
					{
						type: "text",
						name: "email",
						title: "Email",
						isRequired: true,
						inputType: "email",
					},
					{
						type: "multipletext",
						name: "name",
						title: "Name",
						items: [
							{
								name: "first",
								title: "First",
							},
							{
								name: "last",
								title: "Last",
							},
						],
						colCount: 2,
					},
					{
						type: "text",
						name: "phone",
						title: "Phone Number",
						description:
							"Provide a phone number if you would like us to give you a callback.",
						inputType: "tel",
					},
					{
						type: "comment",
						description:
							"Please provide any questions, requests, or quotes.",
						name: "request",
						title: "Question",
						isRequired: true,
					},
				],
			},
		],
	}
	const survey = new Model(surveyJson)

	survey.applyTheme(ThreeDimensionalLight)

	// This is a hack to make the survey update on typing.
	survey.textUpdateMode = "onTyping"

    survey.onComplete.add((result) => console.log(result.data))

	return <Survey model={survey}></Survey>
}
