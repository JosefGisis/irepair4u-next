import { Typography } from "@mui/material"
import { servicesTextContent } from "../../../content"

export default function ServicesSection() {
	return (
		<div>
			{servicesTextContent.map((section, index) => (
				<div key={index} id={section.id || ""}>
					<Typography
						variant="h5"
						textAlign="start"
						style={{ marginTop: "1rem", marginBottom: "1rem" }}>
						{section.section}
					</Typography>
					{section.services.map((service, index) => (
						<div key={index} id={service.id || ""}>
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
