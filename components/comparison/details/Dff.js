import React from 'react';
import { Typography, Stack, Rating, CardMedia } from "@mui/material";

function Sticky() {
	return (
		<div className={"table-responsive vsdetails"}>
			<table className={"table compare-tool"}>
				<thead>
					<tr>
						<th className={"headerth w37"} scope="col">
							<CardMedia
								image="/images/vs/1.webp"
								component="img"
								alt="green iguana"
								height="150"
								className={"w-50 m-auto border my-3"}
							/>
							<Typography
								className={"textSecondary"}
								fontSize={25}
								fontWeight={"bolder"}
							>
								woolash
							</Typography>
						</th>
						<th className={"headerth w25"} scope="col">
							<Typography
								className={"textSecondary"}
								fontSize={25}
								fontWeight={"bolder"}
							>
								WHAT IS BETTER THAN LATISSE ?
							</Typography>
						</th>
						<th className={"headerth w37"} scope="col">
							<CardMedia
								image="/images/vs/2.webp"
								component="img"
								alt="green iguana"
								height="150"
								className={"w-50 m-auto border my-3"}
							/>
							<Typography
								className={"textSecondary"}
								fontSize={25}
								fontWeight={"bolder"}
							>
								woolash
							</Typography>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className={"py-3"} align='center'>
							<Typography
								fontSize={25}
							>
								95%
							</Typography>
							<Stack>
								<Rating
									name="half-rating-read"
									defaultValue={3.75}
									precision={0.5}
									readOnly
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</Stack>
						</td>
						<th className={"py-3"} align='center' scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Overall Score
							</Typography>
						</th>
						<td className={"py-3"} align='center'>
							<Typography
								fontSize={25}
							>
								95%
							</Typography>
							<Stack>
								<Rating
									name="half-rating-read"
									defaultValue={3.75}
									precision={0.5}
									readOnly
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</Stack>
						</td>
					</tr>
					<tr>
						<td className={"py-3"} align='center'>
							<Typography
								fontSize={25}
							>
								95%
							</Typography>
							<Stack>
								<Rating
									name="half-rating-read"
									defaultValue={3.75}
									precision={0.5}
									readOnly
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</Stack>
						</td>
						<th className={"py-3"} align='center' scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Costomer reviews
							</Typography>
						</th>
						<td className={"py-3"} align='center'>
							<Typography
								fontSize={25}
							>
								95%
							</Typography>
							<Stack>
								<Rating
									name="half-rating-read"
									defaultValue={3.75}
									precision={0.5}
									readOnly
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								/>
							</Stack>
						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"red"}
								fontWeight={"bolder"}
								fontSize={20}
							>
								Pros
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"green"}
								fontWeight={"bolder"}
								fontSize={20}
							>
								Cons
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Ingredients
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								All Products
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Satisfaction Guarantee
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Latest Coupons
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Pricing
								<br />
								( Without Discounts )
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"p-3"}>

						</td>
						<th className={"p-3"} scope="row">
							<Typography
								color={"#000"}
								fontSize={20}
							>
								Country
							</Typography>
						</th>
						<td className={"p-3"}>

						</td>
					</tr>
					<tr>
						<td className={"footerth"}>

						</td>
						<th className={"footerth"} scope="row">

						</th>
						<td className={"footerth"}>

						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
export default Sticky;