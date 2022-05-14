import React from "react";
import { Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Faq(props) {

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};


	return (
		<Accordion expanded={expanded === props.expanded} onChange={handleChange(props.expanded)} className={"mb-2 accordion"}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls={props.ariacontrols}
				id={props.id}
			>
				<Typography fontWeight={"bolder"} variant="h4" fontSize={17}>
					{props.question}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography color={"gray"} variant="p">
					{props.response}
				</Typography>
			</AccordionDetails>
		</Accordion>

	)
}

export default Faq;