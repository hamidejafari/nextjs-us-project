import React, { useState } from "react";
import { Grid, Typography, Rating, Card, Stack, Box } from "@mui/material";
import Link from "next/link";
// styles

function ListPro(props) {
  return (
    <Grid md className={"p-2 li"}>
      <Card className={"p-0 rounded-0 shadow-none border crd"}>
        <Link href={"/" + props.url}>
          <a>
            <Box className={"p-3"}>
              <img
                src={
                  props.image?.fileName
                    ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/files/images/big/" +
                      props.image?.fileName
                    : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                      "/files/images/placeholder/300x300.webp"
                }
                alt={props.image?.alt}
                width="100%"
              />
            </Box>
            <Typography
              className={"p"}
              sx={{
                height: "3rem",
              }}
            >
              <span className={"number"}>#{props.number}</span>
              <span className={"name"}>{props.name}</span>
            </Typography>
          </a>
        </Link>
        <Box className="over">
          <div className="h-100">
            <Grid>
              <Grid xs={12} className={"p-1"}>
                <Typography>{props?.reviewsCount} reviews</Typography>
              </Grid>
              <Grid xs={12} className={"p-1"}>
                <Typography>overall rating : {props?.overallRating}</Typography>
              </Grid>
              <Grid xs={12} className={"p-1"}>
                {/* <Link href=""> */}

                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a
                    target="_blank"
                    rel="nofollow"
                    href={props.websiteUrl}
                    className={
                      "w-100 btnVisit d-flex align-items-center justify-content-center p-1"
                    }
                  >
                    <Typography>visit website</Typography>
                  </a>
                {/* </Link> */}
              </Grid>
              <Grid xs={12} className={"p-1"}>
                <Link href={"/" + props.reviewsUrl}>
                  <a
                    className={
                      "w-100 btnReview d-flex align-items-center justify-content-center p-1"
                    }
                  >
                    <Typography>see reviews</Typography>
                  </a>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Card>
    </Grid>
  );
}

export default ListPro;
