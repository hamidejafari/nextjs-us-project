import React from "react";
import { ListItem, Typography, Grid, List } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

// styles
import sxStyles from "../../styles/style";

function Links(props) {
  const router = useRouter();
  return (
    <Grid item  sm={6} xs={4}>
      <List className={"py-1"}>
        <ListItem className={"py-0"}>
          <Link href={"/" + props.url}>
            <a>
              <Typography
                variant="body2"
                gutterBottom
                sx={sxStyles["footerLink"]}
                color={"#000"}
              >
                {props.title?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </a>
          </Link>
        </ListItem>
      </List>
    </Grid>
  );
}

export default Links;
