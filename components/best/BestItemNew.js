import React, { useState } from "react";
import {
  Grid,
  Typography,
  Rating,
  Card,
  Divider,
  Box,
  Hidden,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
import Link from "next/link";
// styles
import sxStyles from "../../styles/style";

// components
import ProsCons from "./ProsCons";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1200 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 570 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 570, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
function BestItemNew(props) {
  const router = useRouter();
  const reviewCount = props.reviewsNumber;
  return (
    <Grid xs={12} className={"p-0"}>
      <Grid container spacing={1} className={"w-100 m-0 p-2"}>
        <Grid xs={12}>
          <Typography
            fontSize={20}
            component="h4"
            className={"fw-bolder"}
            display={"flex"}
            alignItems={"center"}
          >
            <span
              className={"bgSecondary text-white me-2"}
              style={{
                color: "#fff",
                display: "flex",
                width: "3rem",
                height: "3rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {props.number}
            </span>
            {props.productName}
          </Typography>
        </Grid>

        <Grid xl={4} sx={{ mx: "auto", my: 3 }}>
          <img
            className="img-fluid"
            width="100%"
            height="auto"
            src={
              props.image
                ? process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/medium/" +
                  props.image
                : process.env.NEXT_PUBLIC_IMAGE_SERVER +
                  "/files/images/placeholder/product-sample.webp"
            }
            alt={props.alt}
          />
        </Grid>
        <Grid xs={12} py={2}>
          <Typography
            variant="body1"
            component="body1"
            fontSize={"16.5"}
            color={"#666"}
          >
            <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
          </Typography>

          <Grid container spacing={1} className={"w-100 m-0 pt-3 pb-4"}>
            <Grid
              xl={2}
              lg={3}
              md={4}
              sm={3}
              xs={6}
              ml={"auto"}
              className={"pe-2 align-self-center"}
            >
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a
                target="_blank"
                rel="nofollow"
                href={props.websiteUrl}
                size="medium"
                variant="contained"
                className={
                  "w-100 btnVisit d-flex align-items-center justify-content-center p-1"
                }
              >
                <Typography
                  sx={{ fontSize: { md: "1rem", xs: "0.8rem" } }}
                  textAlign={"center"}
                >
                  visit website
                </Typography>
              </a>
            </Grid>
            <Grid
              xl={2}
              lg={3}
              md={4}
              sm={3}
              xs={6}
              className={"ps-2 align-self-center"}
            >
              <Link
                href={"/" + props.reviewsUrl}
                size="medium"
                variant="contained"
              >
                <a
                  className={
                    "w-100 btnReview d-flex align-items-center justify-content-center p-1"
                  }
                >
                  <Typography
                    sx={{ fontSize: { md: "1rem", xs: "0.8rem" } }}
                    textAlign={"center"}
                  >
                    see reviews
                  </Typography>
                </a>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BestItemNew;
