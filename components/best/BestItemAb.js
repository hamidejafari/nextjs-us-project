import React, { useEffect, useState } from "react";
import {
	Grid,
	Typography,
	Rating,
	Card,
	Divider,
	Box,
	Hidden,
	Avatar,
	Chip,
	Stack,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRouter } from "next/router";
import Link from "next/link";
// styles
import sxStyles from "../../styles/style";

// components
import ProsConsAb from "./ProsConsAb";
import FaqAb from "./FaqAb";

function TopBrands(props) {
	const router = useRouter();
	const reviewCount = props.reviewsNumber;



	return (
		<Grid sx={{ p: { lg: '0.5rem', xs: '0.5rem 0rem' } }} xs={12} className={"wmxbox"}>
			<Card className={"p-2 shadow-none rounded-0 bord"}>
				<Grid container spacing={1} className={"w-100 m-0"}>
					<Grid xs={12} className={"p-1"}>
						<Grid container spacing={1} className={"w-100 m-0"}>
							<Grid xs={12} className={"p-1"}>
								{/* desktop name product */}
								<Grid
									xl={5}
									mx={"auto"}
								>
									<Grid
										container
										spacing={1}
										className={"w-100 mx-0 my-3"}
										sx={sxStyles["sideDesk"]}
										style={{
											display: 'flex',
											justifyContent: 'center',
										}}
									>
										<Stack direction="row" spacing={1}>
											<Chip avatar={<Avatar>{props.number}</Avatar>} label={props.brandName} />
										</Stack>
									</Grid>
								</Grid>
								<Grid xs={12} className={"px-0 pt-3 pb-1"}>
									<Link
										href={"/" + props.reviewsUrl}
										size="medium"
										variant="contained"
									>
										<a>
											<div className={"figure wmx-img pointer"}>
												<div className={"figure-inn"}>
													<img
														className="img-fluid"
														width="100%"
														height="auto"
														src={
															props.image
																? process.env.NEXT_PUBLIC_IMAGE_SERVER +
																"/files/images/medium/" +
																props.image
																: process.env.NEXT_PUBLIC_IMAGE_SERVER +
																"/files/images/placeholder/product-sample.webp"
														}
														alt={props.alt}
													/>
												</div>
											</div>
										</a>
									</Link>
								</Grid>
								<Grid xs={12} className={"p-2"} textAlign={"center"}>
									<Link
										href={"/" + props.reviewsUrl}
										size="medium"
										variant="contained"
									>
										<a>
											<Typography
												className={"textSecondary"}
												fontSize={25}
												sx={{
													fontSize: {
														md: '1.75rem',
														xs: '1rem',
													}
												}}
											>
												{props.productName}
											</Typography>
										</a>
									</Link>
								</Grid>
								{/* desktop name product */}
								<Grid container spacing={1} className={"w-100 mx-0 my-1"}>
									<Grid
										xs={12}
										className={"p-1 align-self-center textCenter"}
									>
										<Rating
											name="half-rating-read"
											defaultValue={props.star}
											precision={0.5}
											readOnly
											size="large"
										/>
									</Grid>
									<Grid
										xs={12}
										className={"p-1 align-self-center textCenter"}
									>
										<Typography 
											variant="body1" 
											component="div"
											sx={{
												fontSize: {
													lg: 17,
													xs: 13,
												}
											}}
										>
											<span className={"me-1"}>{reviewCount}</span>
											reviews
										</Typography>
									</Grid>
									<Grid
										xs={12}
										className={"p-1 align-self-center textCenter"}
									>
										<Typography 
											variant="body1" 
											component="div"
											sx={{
												fontSize: {
													lg: 17,
													xs: 13,
												}
											}}
										>
											overall rating :
											<span className={"ms-1"}>{props.star * 2}</span>
										</Typography>
									</Grid>
								</Grid>
							</Grid>
							<Grid xs={12} className={"p-0"}>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>

									<Grid container spacing={0} className={"w-100 m-0"}>
										<Grid lg={6} xs={6} className={"p-1"} display={"flex"} justifyContent={"flex-end"}>
											{/* eslint-disable-next-line react/jsx-no-target-blank */}
											<a
												target="_blank"
												rel="nofollow"
												href={props.websiteUrl}
												size="medium"
												variant="contained"
												className={
													"btnVisit d-flex align-items-center justify-content-center wmx"
												}
											>
												<Typography
													sx={{ fontSize: { md: "1rem", xs: "1rem" } }}
													textAlign={"center"}
												>
													visit website
												</Typography>
											</a>
										</Grid>
										<Grid lg={6} xs={6} className={"p-1"}>
											<Link
												href={"/" + props.reviewsUrl}
												size="medium"
												variant="contained"
											>
												<a
													className={
														"btnReview d-flex align-items-center justify-content-center wmx"
													}
												>
													<Typography
														sx={{ fontSize: { md: "1rem", xs: "1rem" } }}
														textAlign={"center"}
													>
														see reviews
													</Typography>
												</a>
											</Link>
										</Grid>
									</Grid>


								</Box>
							</Grid>
						</Grid>
						<Divider className={"my-2"} />
						<Grid
							md={12}
							xs={12}
							className={"px-1 py-2"}
							mx={"auto"}
							sx={{ display: { md: "block", sm: "none", xs: "block" } }}
						>
							<Typography
								variant="body1"
								component="body1"
								textAlign={"left"}
								sx={{
									fontSize: {
										md: '1.1rem',
										xs: '0.9rem',
									}
								}}
							>
								<div
									dangerouslySetInnerHTML={{ __html: props.description }}
								></div>
							</Typography>
						</Grid>
					</Grid>
					<Grid xs={12} className={"p-2"}>
						<ProsConsAb pros={props?.pros} cons={props?.cons} />
					</Grid>
					<Grid xs={12} className={"p-2"}>
						<Typography
							fontSize={"1.5rem"}
							className={"fw-bolder textSecondary mb-3"}
						>
							FAQ
						</Typography>
						{
							props.faq?.map((faqcontent, index) => (
								<FaqAb
									key={index}
									id={"panelbh-header" + (index + 1)}
									expanded={"panel" + (index + 1)}
									ariacontrols={"panelbh-content" + (index + 1)}
									question={faqcontent.question}
									response={faqcontent.answer}
								/>
							))
						}
					</Grid>
				</Grid>
			</Card>
		</Grid>
	);
}

export default TopBrands;
