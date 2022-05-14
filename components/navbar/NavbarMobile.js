import React from "react";
import { ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";


function NavbarMobile(props) {
  const router = useRouter();
  return (
    <Link href={"/" + props.url}>
      <a>
        <ListItem
          className={"btnMob"}
          button
          sx={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            px: "8.5px",
            py: "8.5px",
          }}
        >
          <img src={props.icon} alt="" className={"iconNav"} />
          <Typography color={"#000"} className={"ms-2"}>
            {props.title?.replace("$year$", new Date().getFullYear())}
          </Typography>
        </ListItem>
      </a>
    </Link>
  );
}

export default NavbarMobile;
