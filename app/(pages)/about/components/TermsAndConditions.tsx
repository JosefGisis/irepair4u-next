import { Typography } from "@mui/material"

export default function TermsAndConditions(props: {
	__typename: "AboutBlocksTermsAndConditions"
	segments?:
		| ({
				__typename: "AboutBlocksTermsAndConditionsSegments"
				title?: string | null | undefined
				clauses?: (string | null)[] | null | undefined
		  } | null)[]
		| null
		| undefined
}) {
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
				{props.segments?.map((segment, index) => (
					<div key={index}>
						<Typography
							variant="h5"
							style={{ marginBottom: "1rem", marginTop: "2rem" }}>
							{segment?.title}
						</Typography>
						{segment?.clauses?.map((clause, index) => (
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
