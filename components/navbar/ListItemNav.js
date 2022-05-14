import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function NavbarMobile(props) {
  const router = useRouter();
  return (
    <ListItem className={"px-0 py-1"}>
      <ListItemText className={"p-0 m-0"}>
        <Link
          className={"p-0 m-0"}
          color={"#555"}
          fontWeight={"light"}
          href={"/" + props.url}
        >
          <a>
            <Typography noWrap component="div" fontSize={14}>
              {props.title?.replace("$year$", new Date().getFullYear())}
            </Typography>
          </a>
        </Link>
      </ListItemText>
    </ListItem>
  );
}

export default NavbarMobile;
