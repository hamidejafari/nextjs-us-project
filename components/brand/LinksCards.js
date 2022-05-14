import React from "react";
import { Link, ListItem, ListItemText, Typography } from "@mui/material";

function LinksCards(props) {
  return (
    <ListItem className={"me-2"}>
      <ListItemText className={"p-0 m-0"}>
        <Link
          href={props.url}
          className={"textSecondary"}
          borderBottom={"1px solid #999"}
          fontWeight={"bolder"}
        >
          <Typography variant="h6" component="span" fontSize={13}>
            {props.title?.replace("$year$", new Date().getFullYear())}
          </Typography>
        </Link>
      </ListItemText>
    </ListItem>
  );
}

export default LinksCards;
