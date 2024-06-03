import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function Hours(props: {
	__typename: "HomeBlocksHoursOfOperation"
	days?:
		| ({
				__typename: "HomeBlocksHoursOfOperationDays"
				day?: string | null | undefined
				hours?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<div
			data-tina-field={tinaField(props)}
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 5,
				marginTop: "20px",
			}}>
			<Typography variant="h6" style={{ marginBottom: "5px" }}>
				Hours
			</Typography>

			{props.days?.map((day, index) => (
				<div key={index} style={{ display: "flex", gap: 20 }}>
					<Typography>{day?.day} : </Typography>
					<Typography>{day?.hours}</Typography>
				</div>
			))}
		</div>
	)
}
