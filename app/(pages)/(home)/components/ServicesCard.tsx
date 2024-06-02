import * as React from "react"
import Link from "next/link"
import {
	Card,
	CardContent,
	CardActionArea,
	CardMedia,
	Typography,
} from "@mui/material"

export interface ServicesCardProps {
	href?: string | null | undefined
	url?: string | null | undefined
	header?: string | null | undefined
	text?: string | null | undefined
}

export default function ServicesCard({
	url,
	header,
	text,
	href,
}: ServicesCardProps) {
	return (
		<Card sx={{ maxWidth: "345px", marginInline: "auto" }}>
			<Link href={href || ""}>
				<CardActionArea>
					<CardMedia
						component="img"
						sx={{ height: "250px" }}
						image={url || ""}
					/>
					<CardContent>
						<Typography gutterBottom variant="h6" component="div">
							{header}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{text}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Link>
		</Card>
	)
}
