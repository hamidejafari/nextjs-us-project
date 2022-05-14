import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "./List";
function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Typography
        className={"px-2 py-1 pointer"}
        fontWeight={"bolder"}
        color={"#000"}
        fontSize={16}
        display="flex"
        alignItems="center"
      >
        <ChevronRightIcon sx={{mt:'2px'}} />
        {props.category?.title?.replace("$year$", new Date().getFullYear())}
      </Typography>
      <Typography
        className={"px-2 ms-1 py-1"}
        color={"#777"}
        fontSize={13}
      >
        {props.category?.childs?.map((content, index) => (
          <List
            key={index}
            title={content.title}
            childs={content.childs}
            url={content.slug}
          />
        ))}
      </Typography>
     
    </>
  );
}

export default ControlledAccordions;
