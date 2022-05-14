import React,{useEffect} from "react";
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Card,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// components
import ProssAb from "./ProssAb";
import ConssAb from "./ConssAb";

function ProsConsAb(props) {
  const prosItem = props.pros;
  const consItem = props.cons;

  return (
    <>
      {prosItem.length > 0 && (
        <Grid xs={12} className={"pb-3 px-0"}>
          <Card
            className={"shadow-none p-3"}
            sx={{
              backgroundColor: "#ebfff2",
            }}
          >
            <Typography fontSize={20} color={"#23a455"} className={"p-1"}>
              PROS
            </Typography>
            <Grid xs={12} p={0}>
              <List className={"p-0"}>
                {prosItem?.map((proscontent, index) => (
                  <ProssAb key={index} title={proscontent} />
                ))}
              </List>
            </Grid>
          </Card>
        </Grid>
      )}

      {consItem.length > 0 && (
        <Grid xs={12} className={"pb-3 px-0"}>
          <Card
            className={"shadow-none p-3"}
            sx={{
              backgroundColor: "#fff0f0",
            }}
          >
            <Typography fontSize={20} color={"#f83333"} className={"p-1"}>
              CONS
            </Typography>
            <Grid xs={12} p={0}>
              <List className={"p-0"}>
                {consItem?.map((conscontent, index) => (
                  <ConssAb key={index} title={conscontent} />
                ))}
              </List>
            </Grid>
          </Card>
        </Grid>
      )}
    </>
  );
}

export default ProsConsAb;
