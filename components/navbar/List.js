import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// component
import ListItemNav from "./ListItemNav";

function NavbarMobile(props) {
  return (
    <List className={"py-0 px-0 m-0"}>
      <ListItem className={"px-0 py-1"}>
        <ListItemText className={"p-0 m-0"}>
          <Link
            className={"p-0 m-0 d-flex align-items-center"}
            color={"#000"}
            fontWeight={"bolder"}
            fontSize={17}
            href={"/" + props.url}
          >
            <a>
              <Typography className={"pointer"} fontSize={14} color="#777">
                {props.title?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </a>
          </Link>
        </ListItemText>
      </ListItem>
      {props?.childs?.map((content, index) => (
        <ListItemNav key={index} title={content.title} url={content.slug} />
      ))}
    </List>
  );
}

export default NavbarMobile;
