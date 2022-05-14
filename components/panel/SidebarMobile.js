import * as React from 'react';
import { Badge, Card, Container, Grid, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';

import Sidebar from "./Sidebar";

function SidebarMobile(props) {
	const { user } = props;

	return (
		<Card className={"rounded-0 shadow-none bgPrimery p-0"}>
			<Accordion className={"rounded-0 shadow-none bgPrimery p-0"}>
				<AccordionSummary
					expandIcon={
						<MenuIcon />
					}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<nav aria-label="main mailbox folders">
						<List className={"p-0"} sx={{ display: { md: 'none', xs: 'block' } }}>
							<ListItem className={"p-0"}>
								<ListItemAvatar>
									<Avatar alt="Remy Sharp" src="/images/userpl.webp" />
								</ListItemAvatar>
								<ListItemText primary="John Dou" />
							</ListItem>
						</List>
					</nav>
				</AccordionSummary>
				<AccordionDetails className={"p-0"}>
					<Sidebar user={user} />
				</AccordionDetails>
			</Accordion>
		</Card>
	);
}
export default SidebarMobile;