import { Typography } from "@mui/material"
import { servicesTextContent } from "../servicesPageBackupContent"
import { tinaField } from "tinacms/dist/react"

export default function ServicesSection(props: {
	__typename: "ServicesBlocksServicesSection"
	services?:
		| ({
				__typename: "ServicesBlocksServicesSectionServices"
				title?: string | null | undefined
				id?: string | null | undefined
				paragraphs?: (string | null)[] | null | undefined
		  } | null)[]
		| null
		| undefined
	coverage?:
		| ({
				__typename: "ServicesBlocksServicesSectionCoverage"
				title?: string | null | undefined
				id?: string | null | undefined
				paragraphs?: (string | null)[] | null | undefined
		  } | null)[]
		| null
		| undefined
	sales?:
		| ({
				__typename: "ServicesBlocksServicesSectionSales"
				title?: string | null | undefined
				id?: string | null | undefined
				paragraphs?: (string | null)[] | null | undefined
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
			}}>
			{Object.entries(props).map(([key, value], index) => (
				<div key={index} style={{ width: "100%" }}>
					<Typography
						data-tina-field={tinaField(props, key as "coverage" | "sales" | "services")}
						variant="h5"
						style={{ marginTop: "1rem", marginBottom: "1rem" }}>
						{key.toUpperCase()}
					</Typography>
					{value?.map((segment, index) => (
						<div key={index} id={segment?.id || ""}>
							<Typography
								data-tina-field={tinaField(props, "")}
								variant="subtitle1"
								style={{ marginBottom: "0.6rem" }}>
								● {segment?.title}
							</Typography>
							{segment?.paragraphs?.map((paragraph, index) => (
								<Typography
									key={index}
									variant="body1"
									style={{ marginBottom: "0.6rem" }}>
									{paragraph}
								</Typography>
							))}
						</div>
					))}
				</div>
			))}
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
