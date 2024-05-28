import * as React from "react"
import {
	Card,
	CardContent,
	CardActionArea,
	CardMedia,
	Typography,
} from "@mui/material"

export interface ServicesCardProps {
    href: string
	url: string
	header: string
	text: string
}

export default function ServicesCard({ url, header, text, href }: ServicesCardProps) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea href={href}>
				<CardMedia component="img" height="140" image={url} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{header}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{text}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
