import React from "react";
import { Box, Container, Typography, Grid } from '@mui/material';

// component
import Search from "./Search";


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
							ALL VS
						</Typography>
						<Typography variant="h6" component="div" fontSize={15} className={"my-2"}>
							Here, we have provided you with the opportunity to compare various brands in order to make the best decision and buy the best product that really works for you.
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