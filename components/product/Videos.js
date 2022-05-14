import React from "react";
import { Grid, CardMedia, Modal, Box, Fab, } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router'
import YoutubeEmbed from "../../components/YoutubeEmbed"

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: {
		lg: '50%',
		xs: '100%'
	},
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function Videos(props) {
	const router = useRouter()

	return (
		<Grid item xs={12} className={"p-0"}>
			<Grid item xs={12} className={"p-2 mob"}>
				<YoutubeEmbed embedId={props.embedId} />
			</Grid>
		</Grid>
	)
}

export default Videos;