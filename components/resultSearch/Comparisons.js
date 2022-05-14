import React from "react";
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

function Comparison(props) {
  return (
    <Grid xl={4} className={"px-2 py-1"}>
      <Link href={"/" +  props.url}>
        <a>
          <Typography
            noWrap
            color={"#333"}
            fontSize={16}
            sx={{ marginLeft: "3px" }}
            className={"pointer"}
          >
            {props.name}
          </Typography>
        </a>
      </Link>
    </Grid>
  );
}

export default Comparison;
