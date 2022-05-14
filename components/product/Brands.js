import React from "react";
import Link from "next/link";
import { Typography, ListItem, ListItemText } from "@mui/material";

function TopBrands(props) {
  return (
    <ListItem className={"p-0"}>
      <ListItemText>
        <Link href={"/brand/" + props.url} variant="contained" disableElevation>
          <a>
            <Typography className={"btnBrand"} fontSize={1}>
              {"#"+props.standing+" "+props.title?.replace("$year$", new Date().getFullYear())}
            </Typography>
          </a>
        </Link>
      </ListItemText>
    </ListItem>
  );
}

export default TopBrands;
