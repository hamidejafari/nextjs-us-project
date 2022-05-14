import React, { useState } from "react";
import {
	Grid,
	Typography,
	Rating,
	Card,
	Divider,
	Box,
	Hidden,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";
import Link from "next/link";
// styles
import sxStyles from "../../styles/style";

// components
import ProsCons from "./ProsCons";

function Specialist(props) {
	const router = useRouter();
	const reviewCount = props.reviewsNumber;
	return (
		<Grid xs={12} sx={{ p: { lg: '0.5rem', xs: '0.5rem 0rem' } }}>
			<Card className={"p-2 shadow-none rounded-0"}>
				<Grid container spacing={1} className={"w-100 m-0"}>
					<Grid 
						lg={4} 
						md={5} 
						sm={6} 
						className={"p-3"}
						sx={{
							display: {
								sm: 'none',
								xs: 'block'
							}
						}}
						alignSelf={"center"}
					>
						<Card
							className={"rounded-0 shadow-none border"}
						>
							<img src="/images/specialist.jpg" width="100%" height="100%" className={"d-flex"} />
						</Card>
					</Grid>
					<Grid lg={8} md={7} sm={6} className={"p-3"} alignSelf={"center"}>
						<Typography
							fontWeight={"bolder"}
							sx={{
								fontSize: {
									md: 30,
									xs: 20,
								}
							}}
						>
							Emma D. Wedgeworth
						</Typography>
						<Typography
							sx={{
								fontSize: {
									md: 17.5,
									xs: 15,
								}
							}}
							fontWeight={"lighter"}
							color={"#888"}
						>
								{"Having a dense, healthy looking head of hair has always been a sign of beauty. But good things don’t last forever! As you get older, your hair starts to lose its glory. There are products to help you deal with that, but they are not always the miracles they claim to be. You probably don't have the time or the resources to test every available product, and that can be overwhelming. Not to worry though! To help you sort through all the available hair treatments and figure out which one to choose, we’ve prepared a list of seven best hair products with the help of dedicated specialists and excited volunteers!"}
						</Typography>
					</Grid>
					<Grid 
						lg={4} 
						md={5} 
						sm={6} 
						className={"p-3"}
						sx={{
							display: {
								sm: 'block',
								xs: 'none'
							}
						}}
					>
						<Card
							className={"rounded-0 shadow-none border"}
						>
							<img src="/images/specialist.jpg" width="100%" height="100%" className={"d-flex"} />
						</Card>
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
}

export default Specialist;
