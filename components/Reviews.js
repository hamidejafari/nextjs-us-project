import React from "react";
import { Grid, Box, Container, Typography,Card,Rating,Stack } from '@mui/material';
import Carousel from 'react-multi-carousel';

// components
import ReviewBox from './review/ReviewBox'
import ReviewBoxMobile from './review/ReviewBoxMobile'


// styles
import sxStyles from "../styles/style";
const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 2000 },
		items: 2,
		slidesToSlide: 1
	},
	tablet: {
		breakpoint: { max: 2000, min: 1000 },
		items: 2,
		slidesToSlide: 1
	},
	mobile: {
		breakpoint: { max: 1000, min: 0 },
		items: 1.25,
		slidesToSlide: 1
	}
};

function Reviews(props) {
	const reviewContent = props?.reviews;
	return (
		<div className={"review"}>
			<Container maxWidth="xl" sx={{ position: 'relative', zIndex: '1010' }}>
				<Box className={" w-100 m-0 "}>
					<Grid
						container
						className={"w-100 m-0"}
						rowSpacing={1}
						columnSpacing={{
							xs: 1,
							sm: 2,
							md: 3
						}}
					>
						<Grid xs={12} className={"titleGrid textCenter"}>
							<Typography
								variant="body2"
								gutterBottom
								sx={sxStyles['sectionTitle']}
								color={"white"}
							>
								Reviews
							</Typography>
						</Grid>
						<Grid lg={8} xs={12} sx={{ mx: 'auto' }} className={"shorDesGrid textCenter"}>
							<Typography
								variant="body2"
								gutterBottom
								sx={sxStyles['sectionDescription']}
								color={"white"}
							>
								We have shown honest and reliable customer reviews from various customers from around the world. This will provide customer feedback and will increase your insight for each brand or product.	
							</Typography>
						</Grid>
					</Grid>
					<Grid 
						xl={9} 
						lg={10} 
						sx={{ 
							mr: 'auto', 
							display: {
								lg: 'block',
								xs: 'none'
							}
						}}
					>
						<Carousel
							swipeable={true}
							draggable={true}
							showDots={false}
							arrows={true}
							responsive={responsive}
							ssr={false} // means to render carousel on server-side.
							infinite={true}
							autoPlay={true}
							focusOnSelect={false}
							autoPlaySpeed={7500}
							keyBoardControl={false}
							customTransition="all 1s"
							transitionDuration={500}
							containerClass="carousel-container"
							dotListClass="custom-dot-list-style"
							itemClass="carousel-item-padding-40-px"
						>
							{
								reviewContent?.map((content, index) => (
									content &&
									<ReviewBox
										key={index}
										items={content}
									/>
								))
							}
						</Carousel>
					</Grid>
					<Grid 
						xl={9} 
						lg={10} 
						sx={{ 
							mr: 'auto', 
							display: {
								lg: 'none',
								xs: 'block'
							}
						}}
					>
						<Carousel
							swipeable={true}
							draggable={true}
							showDots={false}
							arrows={true}
							responsive={responsive}
							ssr={false} // means to render carousel on server-side.
							infinite={true}
							autoPlay={true}
							focusOnSelect={false}
							autoPlaySpeed={7500}
							keyBoardControl={false}
							customTransition="all 1s"
							transitionDuration={500}
							containerClass="carousel-container"
							dotListClass="custom-dot-list-style"
							itemClass="carousel-item-padding-40-px"
						>
							{
								reviewContent?.map((item) => (
									item?.map((content, indexContent) => (
										<ReviewBoxMobile key={indexContent} content={content} />
									))
								))
							}
						</Carousel>
					</Grid>
				</Box>
			</Container>
		</div>
	)
}

export default Reviews;