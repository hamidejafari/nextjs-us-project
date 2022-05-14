import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Typography } from "@mui/material";
function Tags(props) {
  return (
    <Link href={"/" + props.url} variant="contained" disableElevation>
      <a>
        <Typography className={"btnBrand pointer"}>
          {props.title?.replace("$year$", new Date().getFullYear())}
        </Typography>
      </a>
    </Link>
  );
}

export default Tags;
