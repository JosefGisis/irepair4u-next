import { Typography } from "@mui/material"
import { servicesTextContent } from "../servicesPageBackupContent"

export default function ServicesSection() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			{servicesTextContent.map((section, index) => (
				<div key={index} style={{ width: "100%" }}>
					<Typography
						variant="h5"
						style={{ marginTop: "1rem", marginBottom: "1rem" }}>
						{section.section}
					</Typography>
					{section.services.map((service, index) => (
						<div key={index} id={service.id}>
							<Typography
								variant="subtitle1"
								style={{ marginBottom: "0.6rem" }}>
								● {service.service}
							</Typography>
							<Typography
								variant="body1"
								style={{ marginBottom: "0.6rem" }}>
								{service.description}
							</Typography>
						</div>
					))}
				</div>
			))}
		</div>
	)
}
