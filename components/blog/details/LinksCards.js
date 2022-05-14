import React from "react";
import { Link, ListItem, ListItemText } from "@mui/material";

function LinksCards(props) {
  return (
    <ListItem className={"me-2"}>
      <ListItemText className={"p-0 m-0"}>
        <Link
          href={props.url}
          className={"textSecondary"}
          borderBottom={"1px solid #999"}
        >
          {props.title?.replace("$year$", new Date().getFullYear())}
        </Link>
      </ListItemText>
    </ListItem>
  );
}

export default LinksCards;
