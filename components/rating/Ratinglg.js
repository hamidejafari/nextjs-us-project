import React from "react";
import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function Ratinglg(props) {
  const router = useRouter();
  return (
    <Grid xl={2} lg={3} sm={4} xs={6} item className={"py-0 px-2"}>
      <ListItem className={"px-2 py-1"}>
        <ListItemText className={"m-0"}>
          <Link href={"/" + props.url} color={"#000"}>
            <a>
              <Typography
                noWrap
                component="div"
                color={"#333"}
                fontSize={16}
                display={"flex"}
                alignItems={"center"}
              >
                <img
                  loading="lazy"
                  src={
                    props.image
                      ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/medium/" +
                        props.image
                      : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                        "/files/images/placeholder/300x396.webp"
                  }
                  alt={props.alt}
                  width="30"
                  height="30"
                  className={"me-2"}
                />
                {props.title?.replace("$year$", new Date().getFullYear())}
              </Typography>
            </a>
          </Link>
        </ListItemText>
      </ListItem>
    </Grid>
  );
}
export default Ratinglg;
