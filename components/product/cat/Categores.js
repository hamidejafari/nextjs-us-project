import React from "react";
import { Grid } from '@mui/material';

// component
import Cat from "./Cat";

function Categores(props) {
	const cats = props?.childs;
	return (
		<Grid container spacing={1} className={"w-100 m-0"}>
			{
			cats?.map((content, index) => (
				<Cat key={index} title={content.title} shortDescription={content.shortDescription}  image={content.icon} url={content.slug} />
			))
		}
		</Grid>
	)
}

export default Categores;