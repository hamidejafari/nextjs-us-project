import React from "react";
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// components
import Pross from "./Pross";
import Conss from "./Conss";

function ProsCons(props) {
	const prosItem = props.pros;
	const consItem = props.cons;
	return (
		<Accordion className={"shadow-none"}>
			<Grid xl={3} lg={4} md={5}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1d-content"
					// aria-controls="panel1d-content"
					id="panel1d-header"
					className={"w-100 p-1 proconBtn"}
				>
					<Typography>
						<span className={"pros"}>
							PROS
						</span>
						<span className={"mx-1"}>
							&
						</span>
						<span className={"cons"}>
							CONS
						</span>
					</Typography>
				</AccordionSummary>
			</Grid>
			<AccordionDetails className={"mt-2 proconContent"}>
				<Grid container spacing={1} className={"w-100 m-0"}>
					<Grid md={6} sm={6} xs={12} p={0}>
						<List className={"p-0"}>
							<ListItem className={"px-0 pt-0"}>
								<ListItemText className={"p-1"}>
									<Typography variant="h6" component="div" className={" d-flex align-items-center fw-bolder pros "}>
										PROS
									</Typography>
								</ListItemText>
							</ListItem>
							{
								prosItem?.map((proscontent, index) => (
									<Pross
										key={index}
										title={proscontent}
									/>
								))
							}
						</List>
					</Grid>
					<Grid md={6} sm={6} xs={12} p={0}>
						<List className={"p-0"}>
							<ListItem className={"px-0 pt-0"}>
								<ListItemText className={"p-1"}>
									<Typography variant="h6" component="div" className={" d-flex align-items-center fw-bolder cons "}>
										CONS
									</Typography>
								</ListItemText>
							</ListItem>
							{
								consItem?.map((conscontent, index) => (
									<Conss
										key={index}
										title={conscontent}
									/>
								))
							}
						</List>
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	)
}

export default ProsCons;