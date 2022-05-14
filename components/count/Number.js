import React from "react";
import { Grid, Typography } from '@mui/material';

// styles
import sxStyles from "../../styles/style";

function Number(props) {
	return (
		<Grid md={2} className={"d-flex countGrid"} >
			<Typography
				variant="body2"
				gutterBottom
				sx={sxStyles['numberCount']}
			>
				{props.number}
			</Typography>
		</Grid>
	)
}

export default Number;