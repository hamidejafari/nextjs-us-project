import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, Grid, Checkbox } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 7,
	borderRadius: 2,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 2,
		backgroundColor: theme.palette.mode === 'light' ? '#8a56b5' : '#308fe8',
	},
}));

function Raiting() {
	return (
		<Card className={"px-1 py-3 rounded-0"}>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{
					xs: 1,
					sm: 2,
					md: 3
				}}
				className={"w-100 m-0"}
			>
				<Grid xs={1} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Checkbox 
						sx={{
							color: '#8a56b5',
							'&.Mui-checked': {
								color: '#8a56b5',
							},
						}}
					/>
				</Grid>
				<Grid lg={2} xs={4} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					5 stars
				</Grid>
				<Grid lg={7} xs={5} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Box sx={{ flexGrow: 1 }}>
						<BorderLinearProgress variant="determinate" value={67} />
					</Box>
				</Grid>
				<Grid xs={2} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					67
				</Grid>
			</Grid>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{
					xs: 1,
					sm: 2,
					md: 3
				}}
				className={"w-100 m-0"}
			>
				<Grid xs={1} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Checkbox 
						sx={{
							color: '#8a56b5',
							'&.Mui-checked': {
								color: '#8a56b5',
							},
						}}
					/>
				</Grid>
				<Grid lg={2} xs={4} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					4 stars
				</Grid>
				<Grid lg={7} xs={5} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Box sx={{ flexGrow: 1 }}>
						<BorderLinearProgress variant="determinate" value={87} />
					</Box>
				</Grid>
				<Grid xs={2} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					87
				</Grid>
			</Grid>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{
					xs: 1,
					sm: 2,
					md: 3
				}}
				className={"w-100 m-0"}
			>
				<Grid xs={1} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Checkbox 
						sx={{
							color: '#8a56b5',
							'&.Mui-checked': {
								color: '#8a56b5',
							},
						}}
					/>
				</Grid>
				<Grid lg={2} xs={4} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					3 stars
				</Grid>
				<Grid lg={7} xs={5} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Box sx={{ flexGrow: 1 }}>
						<BorderLinearProgress variant="determinate" value={13} />
					</Box>
				</Grid>
				<Grid xs={2} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					13
				</Grid>
			</Grid>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{
					xs: 1,
					sm: 2,
					md: 3
				}}
				className={"w-100 m-0"}
			>
				<Grid xs={1} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Checkbox 
						sx={{
							color: '#8a56b5',
							'&.Mui-checked': {
								color: '#8a56b5',
							},
						}}
					/>
				</Grid>
				<Grid lg={2} xs={4} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					2 stars
				</Grid>
				<Grid lg={7} xs={5} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Box sx={{ flexGrow: 1 }}>
						<BorderLinearProgress variant="determinate" value={53} />
					</Box>
				</Grid>
				<Grid xs={2} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					53
				</Grid>
			</Grid>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{
					xs: 1,
					sm: 2,
					md: 3
				}}
				className={"w-100 m-0"}
			>
				<Grid xs={1} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Checkbox
						sx={{
							color: '#8a56b5',
							'&.Mui-checked': {
								color: '#8a56b5',
							},
						}}
					/>
				</Grid>
				<Grid lg={2} xs={4} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					1 stars
				</Grid>
				<Grid lg={7} xs={5} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					<Box sx={{ flexGrow: 1 }}>
						<BorderLinearProgress variant="determinate" value={46} />
					</Box>
				</Grid>
				<Grid xs={2} className={"p-1"} alignSelf={"center"} textAlign={"center"}>
					46
				</Grid>
			</Grid>
		</Card>
	);
}

export default Raiting;