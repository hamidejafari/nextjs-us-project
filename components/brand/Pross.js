import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Pross(props) {
  return (
    <ListItem className={"p-0"}>
      <ListItemText className={"m-0 p-1"}>
        <Typography className={"d-flex"}>
          <CheckCircleIcon fontSize="small" className={" me-1 mt-1 pros "} />
          <div
            dangerouslySetInnerHTML={{
              __html: props.title?.replace("$year$", new Date().getFullYear()),
            }}
            className="text-justify"
          ></div>
        </Typography>
      </ListItemText>
    </ListItem>
  );
}

export default Pross;
