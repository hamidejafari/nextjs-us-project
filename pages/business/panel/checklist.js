import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, Box, Divider, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TourOutlinedIcon from '@mui/icons-material/TourOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import Wizard from "../../../components/businessPanel/Wizard"
import BusinesLayout from "../../../layouts/BusinesLayout";
import CircularProgress, { circularProgressClasses, } from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Link from 'next/link';
import { useSelector, shallowEqual } from "react-redux";
import StoreIcon from '@mui/icons-material/Store';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 0 : 0],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
	},
}));


function CheckList() {
	const business = useSelector((state) => state.business?.business, shallowEqual);
	const [steps, setSteps] = useState(0);

	useEffect(() => {
		let stepsDone = 0;

		if (business?.brand) {
			stepsDone = 1;
		}

		if (business?.brand?.image) {
			stepsDone = 2;
		}

		if (business?.brand?.categories?.length > 0) {
			stepsDone = 3;
		}

		if (business?.brand?.productCount > 0) {
			stepsDone = 4;
		}

		if (business?.brand?.brandId?.reviewsCount > 0) {
			stepsDone = 5;
		}

		setSteps(stepsDone);
	}, [business]);

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
					className={"p-2"}
				>
					<Card className={"p-3 shadow-none border rounded-0"}>
						<Typography
							component="p"
							fontSize={22.5}
							fontWeight={"bolder"}
						>
							Hello {business?.user?.name}
						</Typography>
						<Typography
							component="p"
							fontSize={16}
							color={"#777"}
						>
							This is your personal setup guide. Lets get you up and running so you can get more reviews and build trust.
						</Typography>
						<Divider className={"my-2"} />
						<Box sx={{ flexGrow: 1, py: 1 }}>
							<BorderLinearProgress variant="determinate" value={steps * 20} />
						</Box>
						<Typography
							component="p"
							fontSize={16}
							m={0}
						>
							You completed {steps} out of 5 steps - Well done!
						</Typography>
						<Divider className={"my-2"} />
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
							<Wizard steps={steps} />
						</Grid>
					</Card>
					<Typography textAlign={"end"}>
						<Button sx={{ color: '#999' }}>
							Im an expert. Please dont show me this checklist.
						</Button>
					</Typography>
				</Grid>
				<Grid
					xl={5}
					className={"p-2"}
				>
					<Card className={"p-2 shadow-none border rounded-0"}>
						<Typography
							component="p"
							fontSize={22.5}
							fontWeight={"bolder"}
							className={"p-2"}
						>
							Information
						</Typography>
						<Typography component="div" color={"#777"} display={"flex"} alignItems={"center"} className={"p-2"}>
							<StoreIcon sx={{ mr: 1 }} />
							Comapny name :
							<Typography color={"#000"} sx={{ ml: 1 }}>
								{business?.brand?.title}
							</Typography>
						</Typography>

						<Typography component="div" color={"#777"} display={"flex"} alignItems={"center"} className={"p-2"}>
							<AccountCircleOutlinedIcon sx={{ mr: 1 }} />
							Full name :
							<Typography color={"#000"} sx={{ ml: 1 }}>
								{business?.user?.name + " " + business?.user?.family}
							</Typography>
						</Typography>
						<Typography component="div" color={"#777"} display={"flex"} alignItems={"center"} className={"p-2"}>
							<PhoneAndroidIcon sx={{ mr: 1 }} />
							Phone number :
							<Typography color={"#000"} sx={{ ml: 1 }}>

								{business?.user?.phoneNumber}
							</Typography>
						</Typography>

						<Typography component="div" color={"#777"} display={"flex"} alignItems={"center"} className={"p-2"}>
							<MailOutlineOutlinedIcon sx={{ mr: 1 }} />
							Email :
							<Typography color={"#000"} sx={{ ml: 1 }}>
								{business?.user?.email}
							</Typography>
						</Typography>
						{/* <Divider className={"my-2"} />
						<Typography component="div" color={"#777"} display={"flex"} alignItems={"center"} className={"p-2 edit-pro"}>
							<Link href="/">
								<Typography className={"py-2 px-4 btnVisit pointer"} fontSize={25}>
									edit profile
								</Typography>
							</Link>
						</Typography> */}
					</Card>
				</Grid>
			</Grid>
		</BusinesLayout>
	);
}

export default CheckList;