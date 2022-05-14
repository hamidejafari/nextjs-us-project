import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// component
import SubCatMomile from "./SubCatMomile";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", transform: "rotate(90deg)" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(255, 255, 255, 1)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function CustomizedAccordions(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const subcat = [
    {
      title: "title one",
      id: "1",
    },
    {
      title: "title one",
      id: "2",
    },
  ];
  return (
    <div>
      {props.categories?.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === "panel" + item._id}
          onChange={handleChange("panel" + item._id)}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" className={"px-0 AccordionSummarymobile"}>
            <Typography className={"ms-2"}>
              {item.title?.replace("$year$", new Date().getFullYear())}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={"py-2 px-0"}>
            {item.childs?.map((content, index) => (
              <SubCatMomile key={index} category={content} />
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default CustomizedAccordions;
