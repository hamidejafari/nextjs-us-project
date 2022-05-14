import React from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// styles
import sxStyles from "../../styles/style";

function Navitem(props) {
  const router = useRouter();
  return (
    <li className={"navItem"}>
      <Link href={"/" +  props.url} className={"navLink"}>
        <a>
          <Typography
            className={"pointer"}
            color={"#000"}
            variant="h6"
            fontSize={17.5}
            noWrap
            component="div"
            sx={{ ml: "auto" }}
          >
            {props.title?.replace("$year$", new Date().getFullYear())}
          </Typography>
        </a>
      </Link>
    </li>
  );
}

export default Navitem;
