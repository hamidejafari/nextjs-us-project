import React from "react";
import { Box, Container, Typography, Card, CardMedia, Grid } from '@mui/material';

// component
import Search from "./Search";

// styles
import sxStyles from "../../../styles/style";

function HeaderInn() {
	return (
		<Box className={"headerCoupon"}>
			<Container>
				<Grid
					container
					spacing={1}
					className={"w-100 m-0"}
				>
					<Grid xl={8} lg={9} md={10} sm={11} xs={12} mx={"auto"} textAlign={"center"} className={"px-2"}>
						<Typography variant="h3" component="h1" className={"fw-bolder my-2"}>
							Blog Categories  
						</Typography>
						<Typography variant="h6" component="div" fontSize={15} className={"my-2"}>
							Find the best blogs for each category if you want to know details about different brands and their products. Our category blogs help you catch up with new information related to various brands or products and see which ones really work for you. 						
						</Typography>
					</Grid>
					<Grid xl={6} lg={8} md={10} sm={12} xs={12} mx={"auto"} className={"px-2"}>
						<Search />
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default HeaderInn;