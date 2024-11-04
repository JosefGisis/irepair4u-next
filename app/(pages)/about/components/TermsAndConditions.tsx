"use client"

import { Button, Typography } from "@mui/material"
import { useState } from "react"

export default function TermsAndConditions() {
	const [isExpanded, setIsExpanded] = useState(false)

	const expand = () => setIsExpanded(!isExpanded)

	return (
		<div
			id="terms-and-conditions"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "#D2D2D2",
				padding: "2rem",
				marginBottom: "3rem",
				position: "relative",
			}}>
			<div>
				<Typography
					variant="h4"
					style={{ marginBlock: "0.5rem" }}
					textAlign="center">
					TERMS AND CONDITIONS
				</Typography>
			</div>

			<div
				style={{
					position: "relative",
					width: "100%",
					height: isExpanded ? "fit-content" : "300px",
					overflow: "hidden",
				}}>
				<div>
					{termsAndConditionsContent.map((segment, index) => (
						<div key={index} id={segment.id || ""}>
							<Typography
								variant="h5"
								style={{
									marginBottom: "1rem",
									marginTop: "2rem",
								}}>
								{segment?.title}
							</Typography>
							{segment.clauses?.map((clause, index) => (
								<Typography
									key={index}
									style={{ marginBottom: "0.8rem" }}
									variant="body2">
									- {clause}
								</Typography>
							))}
						</div>
					))}
				</div>

				{!isExpanded && (
					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							height: "200px",
							background: "linear-gradient(transparent, #D2D2D2)",
							display: "flex",
							alignItems: "end",
							justifyContent: "center",
							cursor: "pointer",
						}}
						onClick={expand}>
						<Button variant="contained" size="medium">
							Read More
						</Button>
					</div>
				)}
			</div>

			{isExpanded && (
				<div
					style={{
						marginTop: "1rem",
						cursor: "pointer",
					}}
					onClick={expand}>
					<Button variant="contained" size="medium">
						Read Less
					</Button>
				</div>
			)}
		</div>
	)
}

export const termsAndConditionsContent: {
	id?: string
	title: string
	clauses: string[]
}[] = [
	{
		title: "Service Agreement",
		clauses: [
			"The customer agrees to the terms and conditions outlined herein upon availing of phone repair services from iRepair4U LLC.",
			"iRepair4U LLC will provide repair services as described in the service request.",
			"iRepair4U LLC will assess the device and inform the customer of the repair options and costs.",
		],
	},
	{
		title: "Cost and Payment",
		clauses: [
			"Repair costs include parts, labor, and any additional services agreed upon.",
			"Payment is due upon completion of the repair.",
			"iRepair4U LLC reserves the right to withhold the repaired device until full payment is received.",
		],
	},
	{
		title: "Warranty",
		clauses: [
			"All repairs are covered by a free 90-day warranty against defects in workmanship and materials.",
			"This warranty only covers failures or defects in workmanship and materials directly related to the repair or service performed. Unrelated issues are subject to full repair fees and costs.",
			"The 90 day warranty starts on the first day the customer receives the repaired device. All Repairs following the warranty period are subject to full repair fees and costs.",
			"This warranty does not cover damage resulting from mishandling or unauthorized modifications.",
		],
	},
	{
		title: "Phone Sales",
		clauses: [
			"All sales of phones refurbished by iRepair4u are covered by a free 90-day warranty.",
			"The customer is entitled to a full refund or replacement if the refurbished device stops working within the 90-day warranty period and iRepair4U LLC can not repair it.",
			"This warranty does not cover damage resulting from mishandling or unauthorized modifications to the device.",
			"iRepair4u LLC reserves the right to subtract refund total to cover damages to salvageable device parts resulting from mishandling or unauthorized modifications to the device.",
		],
	},
	{
		title: "Customer Responsibilities",
		clauses: [
			"Customers are responsible for backing up their data before submitting devices for repair.",
			"iRepair4U LLC is not liable for any loss of data during the repair process.",
		],
	},
	{
		title: "Turnaround Time",
		clauses: [
			"iRepair4U LLC will make reasonable efforts to complete repairs in a timely manner.",
			"Delays may occur due to unforeseen circumstances, and iRepair4U LLC will communicate any changes in the estimated completion time.",
		],
	},
	{
		title: "Failure to Successfully Recover Device/Data",
		clauses: [
			"iRepair4U LLC reserves the right to charge labor costs for services rendered even if the device cannot be successfully repaired (or the data cannot be recovered) depending on the nature of the repair. Such repairs include water damage recovery, severely damaged devices, and other services where the outcome or likelihood of successful repair is uncertain.",
		],
	},
	{
		title: "Liability",
		clauses: [
			"iRepair4U LLC is not liable for any indirect, consequential, or incidental damages.",
			"The total liability of iRepair4U LLC shall not exceed the total amount of the device submitted for repair. Irepiar4u LLC is not liable for any loss of data during the repair process (see Customer Responsibilities).",
		],
	},
	{
		title: "By availing of our phone repair services, the customer acknowledges and agrees to these terms and conditions.",
		clauses: [],
	},
]
