import React from "react";
import { ListItem, ListItemText, Chip, Avatar } from '@mui/material';
import { useRouter } from 'next/router'
import Link from "next/link";

function TopBrands(props) {
	const router = useRouter()
	return (
		<ListItem className={"p-0 mb-3 li"}>
			<ListItemText className={"m-0"}>
				<Link href={'/brand/' + props.url}>
					<a>
					<Chip
						className={"topBrandsName"}
						avatar={
							<Avatar className={"numberCaret fw-bolder"}>
								{props.number}
							</Avatar>
						}
						label={props.name}
					/>
					</a>
				</Link>
			</ListItemText>
		</ListItem>
	)
}

export default TopBrands;