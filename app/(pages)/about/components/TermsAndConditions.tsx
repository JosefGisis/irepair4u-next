import { Typography } from "@mui/material"

export default function TermsAndConditions() {
	return (
		<section
			id="terms-and-conditions"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "#D2D2D2",
				padding: "2rem",
				marginBottom: "3rem",
			}}>
			<div>
				<Typography
					variant="h4"
					style={{ marginBlock: "0.5rem" }}
					textAlign="center">
					TERMS AND CONDITIONS
				</Typography>
			</div>

			<div>
				{termsAndConditions.map((segment, index) => (
					<div key={index}>
						<Typography
							variant="h5"
							style={{ marginBottom: "1rem", marginTop: "2rem" }}>
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
		</section>
	)
}

type TermsAndConditionsType = { title: string; clauses: string[] }[]
const termsAndConditions: TermsAndConditionsType = [
	{
		title: "Service Agreement",
		clauses: [
			"The customer agrees to the terms and conditions outlined herein upon availing phone repair services from iRepair4U LLC.",
			"iRepair4U LLC will provide repair services as described in the service request.",
			"iRepair4U LLC will assess the device and inform the customer of the repair options and costs.",
		],
	},
	{
		title: "Cost and Payment",
		clauses: [
			"Repair costs include parts, labor, and any additional services agreed upon.",
			"Payment is due upon completion of the repair.",
			"iRepair4U LLC reserves the right to withhold the repaired device until payment is received.",
		],
	},
	{
		title: "Warranty",
		clauses: [
			"All repairs are covered by a free 90-day warranty against defects in workmanship and materials.",
			"The 90 day warranty starts on the first day the customer receives the repaired device. All Repairs following the warranty period are subject to full repair fees.",
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
		title: "Liability",
		clauses: [
			"iRepair4U LLC is not liable for any indirect, consequential, or incidental damages.",
			"The total liability of iRepair4U LLC shall not exceed the total amount paid by the customer for the repair services.",
		],
	},
	{
		title: "By availing of our phone repair services, the customer acknowledges and agrees to these terms and conditions.",
		clauses: [],
	},
]
