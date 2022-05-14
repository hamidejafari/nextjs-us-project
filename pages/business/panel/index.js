import * as React from 'react';
import { Grid, Card, Typography, } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// components
import BusinesLayout from "../../../layouts/BusinesLayout";
import Link from 'next/link';

function Dashboard() {
	return (
		<BusinesLayout>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{
					xs: 1,
					sm: 2,
					md: 3,
				}}
				className={"w-100 m-0"}
			>
				<Grid
					xl={7}
					lg={10}
					xs={12}
					mx={"auto"}
					className={"p-2"}
				>
					<Typography fontSize={25} color={"#000"} fontWeight={"bolder"}>
						Complete your profile
					</Typography>
					<Typography fontSize={17} color={"#999"} fontWeight={"light"} my={2}>
						Use your public brandsreviews profile to complement your website and introduce your business. It’s a great way to promote the products and services you offer to your customers.
					</Typography>
					<Link href="/">
						<a className={"btnVisit p-2"}>
							Add more info
						</a>
					</Link>
					<br/>
					<br/>
					<Card className={"p-3 shadow-none border"}>
						<Typography fontSize={20} color={"#000"} fontWeight={"bolder"}>
							New service reviews
						</Typography>
						<Typography fontSize={17} color={"#999"} fontWeight={"light"}>
							The number of service reviews your business has received in the last 28 days.
						</Typography>
						<Typography fontSize={25} color={"#000"} fontWeight={"bolder"}>
							0
						</Typography>
						<Typography fontSize={12} color={"#999"} fontWeight={"light"} display={"flex"} alignItems={"center"} >
							<CalendarTodayIcon fontSize="small" className={"me-2"}/>
							Since Mar 9, 2022
						</Typography>
					</Card>
				</Grid>
			</Grid>
		</BusinesLayout>
	);
}

export default Dashboard;