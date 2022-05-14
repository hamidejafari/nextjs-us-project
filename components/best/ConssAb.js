import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function ConssAb(props) {
	return (
		<ListItem className={"p-0"}>
			<ListItemText className={"m-0 p-1"}>
				<Typography className={" d-flex align-items-center "}>
					<CancelIcon fontSize="small" className={" me-1 cons "} />
					{props.title?.replace("$year$", new Date().getFullYear())}
				</Typography>
			</ListItemText>
		</ListItem>
	);
}

export default ConssAb;
