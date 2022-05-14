import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function Conss(props) {
  return (
    <ListItem className={"p-0"}>
      <ListItemText className={"m-0 p-1"}>
        <Typography className={" d-flex align-items-center "}>
          <CancelIcon fontSize="small" className={" me-1 cons "} />
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

export default Conss;
