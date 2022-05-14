import React from "react";
import { Grid } from '@mui/material';

// component
import Blog from "./Blog";

function Blogs(props) {
	const blogs = [
		{
			title: 'pulvinar laoreet suspendisse interdum',
			month: 'Feb',
			day: '10',
			image: '../../images/blog/1.webp',
			url: '/',
		},
		{
			title: 'pulvinar neque laoreet interdum',
			month: 'Oct',
			day: '23',
			image: '../../images/blog/2.webp',
			url: '/',
		},
		{
			title: 'pulvinar neque laoreet suspendisse interdum',
			month: 'Feb',
			day: '28',
			image: '../../images/blog/3.webp',
			url: '/',
		},
		{
			title: 'pulvinar neque laoreet',
			month: 'Feb',
			day: '3',
			image: '../../images/blog/4.webp',
			url: '/',
		},
		{
			title: 'pulvinar laoreet suspendisse interdum',
			month: 'Feb',
			day: '10',
			image: '../../images/blog/1.webp',
			url: '/',
		},
		{
			title: 'pulvinar neque laoreet interdum',
			month: 'Oct',
			day: '23',
			image: '../../images/blog/2.webp',
			url: '/',
		},
		{
			title: 'pulvinar neque laoreet suspendisse interdum',
			month: 'Feb',
			day: '28',
			image: '../../images/blog/3.webp',
			url: '/',
		},
		{
			title: 'pulvinar neque laoreet',
			month: 'Feb',
			day: '3',
			image: '../../images/blog/4.webp',
			url: '/',
		},
	];

	return (
		<Grid
			container
			rowSpacing={1}
			columnSpacing={{
				xs: 1,
				sm: 2,
				md: 3
			}}
			className={"w-100 m-0 product-info p-0"}
		>
				{
					props.blogCategories?.map((content, index) => (
						<Blog
							key={index}
							image={
								content.image?.fileName
								  ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
									"/files/images/big/" +
									content.image?.fileName
								  : process.env.NEXT_PUBLIC_IMAGE_SERVER +
									"/files/images/placeholder/300x300.webp"
							}

							title={content.title}
							month={new Date(content.createdAt).toDateString().split(' ')[1]}
							day={new Date(content.createdAt).toDateString().split(' ')[2]}
							url={"/blog/"+content.slug}
						/>
					))
				}
		</Grid>
	)
}

export default Blogs;