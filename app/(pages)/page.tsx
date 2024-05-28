import { Container, Box, Typography, Button } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import ServicesCard from "./components/ServicesContainer"

export default function page() {
	return (
		<Box component="div" id="home-page-content">
			<Container maxWidth="lg">
				{/* this is the hero section for the home page */}
				<Box
					component="section"
					id="about-simple"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Box>
						<Typography
							textAlign="center"
							sx={{ maxWidth: "38.75rem" }}
							variant="h4">
							IPHONE, IPAD, AND MORE
						</Typography>
					</Box>

					<Box>
						<Typography
							textAlign="center"
							sx={{ maxWidth: "43.75rem" }}
							variant="h6">
							iRepair4U has been serving Lakewood, Jackson and
							neighboring communities for over 9 years. We provide
							fast, professional, and courteous services at
							affordable prices. Give us a call so we may assist
							you!
						</Typography>
					</Box>

					<Box
						sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
						<Button href="/contact-us" variant="contained">
							CONTACT US
						</Button>

						<Button href="/about" variant="outlined">
							ABOUT US
						</Button>
					</Box>

					<img
						src="images/imac-940x474.png"
						width="940"
						height="474"
						alt="Image of several Apple devices"
						title="Image of several Apple devices"
					/>
				</Box>

				{/* this is a simple about section for the home page */}
				<Box
					component="section"
					id="about-detailed"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Box maxWidth="28.75rem">
						<Typography textAlign="center" variant="h4">
							ABOUT US
						</Typography>
					</Box>

					<Box sx={{ display: "flex", flexDirection: "row" }}>
						<Box>
							<Typography variant="h6">OUR STORY</Typography>

							<Typography variant="body2">
								we have a long story that I am not interested in
								getting into just about now so let this message
								suffice as an example
							</Typography>
						</Box>
						<img
							src="images/about-us-3-2-460x307.jpg"
							width="460"
							height="307"
							alt="Image of a phone being repaired surrounded by phone repair tools"
							title="Image of a phone being repaired surrounded by phone repair tools"
						/>
					</Box>
				</Box>

				{/* this is a simple services section for the home page */}
				<Box
					component="section"
					id="services"
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Box maxWidth="38.75rem">
						<Typography textAlign="center" variant="h4">
							SERVICES
						</Typography>
					</Box>
					<Grid2 container spacing={2}>
						<Grid2 xs={12} sm={6}>
							<ServicesCard
								text="Phone screen broken or cracked? No worries! Screen repairs are our specialty. We will have your phone looking and working
  line new in no time."
								url="images/age-barros-fKAjOxgZNPg-unsplash.jpg"
								href="/services"
								header="SCREEN REPLACEMENT"
							/>
						</Grid2>
						<Grid2 xs={12} sm={6}>
							<ServicesCard
								text="Accidents happen. Bring us your water damaged phone so we can assist you. In the meantime, 
  click <a classtext-white href to see what you can do to increase your phone's chance of surviving."
								url="images/iphone-1067991_640.jpg"
								href="/services"
								header="WATER DAMAGE"
							/>
						</Grid2>
						<Grid2 xs={12} sm={6}>
							<ServicesCard
								text="If your phone won't charge or your battery is draining too quickly, we offer fast and affordable battery replacements and
  charging port repairs. "
								url="images/tyler-lastovich-rAtzDB6hWrU-unsplash.jpg"
								href="/services"
								header="BATTERY REPLACEMENT"
							/>
						</Grid2>
					</Grid2>
				</Box>
			</Container>

			{/* this is the warranty banner */}
			<Box
				id="warranty-banner"
				sx={{ backgroundColor: "#D2D2D2", textColor: "#000000" }}>
				<Container maxWidth="lg">
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}>
						<Typography variant="h4" textAlign="center">
							WARRANTY
						</Typography>
						<Typography variant="body2" textAlign="center">
							All our phone repair services are backed by our free
							90-day warranty. We guarantee the quality of our
							work. If you encounter issue connected to the repair
							we conducted, we've got you covered. See for more
							information on our warranty.
						</Typography>
					</Box>
				</Container>
			</Box>
		</Box>
	)
}
