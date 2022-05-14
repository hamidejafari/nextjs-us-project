import React from "react";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

// styles
import sxStyles from "../../styles/style";

function mobileCount(props) {
	return (
		<div className={"border px-1"}>
			<ListItem className={""}>
				<ListItemAvatar>
					<Avatar alt={props.name} src={props.icon} sx={{ borderRadius: 0 }} />
				</ListItemAvatar>
				<ListItemText primary={props.number} secondary={props.name} />
			</ListItem>
		</div>
	)
}

export default mobileCount;