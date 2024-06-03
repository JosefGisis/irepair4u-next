import { Typography } from "@mui/material"
import { tinaField } from "tinacms/dist/react"

export default function Hours(props: {
	__typename: "LinksBlocksHoursOfOperation"
	days?:
		| ({
				__typename: "LinksBlocksHoursOfOperationDays"
				day?: string | null | undefined
				hours?: string | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
	return (
		<div
			data-tina-field={tinaField(props, "days")}
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
