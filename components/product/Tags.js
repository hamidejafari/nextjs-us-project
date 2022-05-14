import React from "react";
import { Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import Link from "next/link";

function Tags(props) {
	return (
		<ListItem
			sx={{
				backgroundColor: '#eee',
				padding: '3px 6px',
				margin: '2px',
				width: 'max-content'
			}}
		>
			<ListItemText
				sx={{
					margin: 0
				}}
			>
				<Link href={"/" + props.url}>
					<a>
						{props.title}
					</a>
				</Link>
			</ListItemText>
		</ListItem>
	);
}

export default Tags;
